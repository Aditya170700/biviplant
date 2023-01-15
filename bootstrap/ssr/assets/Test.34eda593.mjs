import { resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { reactive } from "@vue/reactivity";
const _sfc_main = {
  __name: "Test",
  __ssrInlineRender: true,
  setup(__props) {
    let center = reactive({ lat: 40.689247, lng: -74.044502 });
    function dragend(e) {
      console.log(e.latLng.lat(), e.latLng.lng());
      center.lat = e.latLng.lat();
      center.lng = e.latLng.lng();
    }
    function setPlace(e) {
      console.log(e.geometry.location.lat(), e.geometry.location.lng());
      center.lat = e.geometry.location.lat();
      center.lng = e.geometry.location.lng();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GMapAutocomplete = resolveComponent("GMapAutocomplete");
      const _component_GMapMap = resolveComponent("GMapMap");
      const _component_GMapMarker = resolveComponent("GMapMarker");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-lg-12 px-lg-5 mb-3" }, _attrs))}><div class="mb-3"><label for="address" class="form-label d-flex justify-content-between"><span>Lokasi</span></label>`);
      _push(ssrRenderComponent(_component_GMapAutocomplete, {
        placeholder: "Cari...",
        onPlace_changed: setPlace,
        class: "form-control mb-2"
      }, null, _parent));
      _push(ssrRenderComponent(_component_GMapMap, {
        style: { "width": "100%", "height": "500px" },
        center: { lat: unref(center).lat, lng: unref(center).lng },
        zoom: 15,
        onClick: dragend
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_GMapMarker, {
              position: unref(center),
              clickable: true,
              draggable: true,
              onDrag: dragend
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_GMapMarker, {
                position: unref(center),
                clickable: true,
                draggable: true,
                onDrag: dragend
              }, null, 8, ["position"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
