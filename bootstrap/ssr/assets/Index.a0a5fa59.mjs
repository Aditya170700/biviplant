import { L as Layout } from "./App.6cf91a9e.mjs";
import { P as Pagination } from "./Pagination.43572340.mjs";
import { Link, useForm } from "@inertiajs/inertia-vue3";
import { S as SpinnerProcessing, F as FormText } from "./SpinnerProcessing.6b8068f7.mjs";
import { Inertia } from "@inertiajs/inertia";
import { reactive, onMounted, resolveComponent, mergeProps, withCtx, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, vModelSelect, createTextVNode, useSSRContext } from "vue";
import axios from "axios";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@vue/reactivity";
const _sfc_main = {
  components: {
    Layout,
    Link,
    SpinnerProcessing,
    FormText,
    Pagination
  },
  props: {
    errors: Object,
    result: Object
  },
  setup(props) {
    const form = useForm({
      province_id: "",
      city_id: "",
      subdistrict_id: "",
      longitude: 0,
      latitude: 0,
      sender: "",
      phone: "",
      postal_code: "",
      detail: ""
    });
    let other = reactive({
      provinces: [],
      cities: [],
      subdistricts: [],
      searchAddress: [],
      preview: null
    });
    function preview(data) {
      other.preview = data;
      let myModal = new bootstrap.Modal(
        document.getElementById("preview"),
        {
          keyboard: false
        }
      );
      myModal.show();
    }
    let getProvince = () => {
      axios.get("/api/provinces").then((response) => {
        other.provinces = response.data.data;
      }).catch((error) => {
        console.log(error);
      });
    };
    let getCity = (provinceId) => {
      axios.get("/api/cities", {
        params: {
          province_id: provinceId
        }
      }).then((response) => {
        other.cities = response.data.data;
      }).catch((error) => {
        console.log(error);
      });
    };
    let getSubdistrict = (cityId) => {
      axios.get("/api/subdistricts", {
        params: {
          city_id: cityId
        }
      }).then((response) => {
        other.subdistricts = response.data.data;
      }).catch((error) => {
        console.log(error);
      });
    };
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          form.latitude = position.coords.latitude;
          form.longitude = position.coords.longitude;
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
    onMounted(() => {
      getProvince();
      getLocation();
    });
    function submit() {
      form.transform((data) => ({
        ...data
      })).post(route("admin.origins.store"), {
        onSuccess: () => {
          form.reset(
            "province_id",
            "city_id",
            "subdistrict_id",
            "longitude",
            "latitude",
            "sender",
            "phone",
            "postal_code",
            "detail"
          );
        }
      });
    }
    let destroy = (id) => {
      confirmation(
        "Tindakan ini akan menghapus data secara permanen"
      ).then((res) => {
        if (res) {
          Inertia.delete(
            route("admin.origins.destroy", {
              id
            })
          );
        }
      });
    };
    function dragend(e) {
      form.latitude = e.latLng.lat();
      form.longitude = e.latLng.lng();
    }
    function setPlace(e) {
      form.latitude = e.geometry.location.lat();
      form.longitude = e.geometry.location.lng();
    }
    return {
      other,
      getCity,
      getSubdistrict,
      form,
      preview,
      submit,
      destroy,
      dragend,
      setPlace
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_GMapAutocomplete = resolveComponent("GMapAutocomplete");
  const _component_GMapMap = resolveComponent("GMapMap");
  const _component_GMapMarker = resolveComponent("GMapMarker");
  const _component_FormText = resolveComponent("FormText");
  const _component_SpinnerProcessing = resolveComponent("SpinnerProcessing");
  const _component_Pagination = resolveComponent("Pagination");
  _push(ssrRenderComponent(_component_Layout, mergeProps({ title: "Suplier" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-md-12 grid-margin"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><form${_scopeId}><div class="row"${_scopeId}><div class="col-lg-12 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="address" class="form-label d-flex justify-content-between"${_scopeId}><span${_scopeId}>Lokasi</span></label>`);
        _push2(ssrRenderComponent(_component_GMapAutocomplete, {
          placeholder: "Cari...",
          onPlace_changed: $setup.setPlace,
          class: "form-control mb-2"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_GMapMap, {
          style: { "width": "100%", "height": "500px" },
          center: {
            lat: $setup.form.latitude,
            lng: $setup.form.longitude
          },
          zoom: 15,
          onClick: $setup.dragend
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_GMapMarker, {
                position: {
                  lat: $setup.form.latitude,
                  lng: $setup.form.longitude
                },
                clickable: true,
                draggable: true,
                onDrag: $setup.dragend
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_GMapMarker, {
                  position: {
                    lat: $setup.form.latitude,
                    lng: $setup.form.longitude
                  },
                  clickable: true,
                  draggable: true,
                  onDrag: $setup.dragend
                }, null, 8, ["position", "onDrag"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="longitude" class="form-label"${_scopeId}>Longitude</label><input class="form-control" id="longitude"${ssrRenderAttr("value", $setup.form.longitude)} disabled${_scopeId}>`);
        if ($setup.form.errors.longitude) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "longitude",
            message: $setup.form.errors.longitude
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="latitude" class="form-label"${_scopeId}>Latitude</label><input class="form-control" id="latitude"${ssrRenderAttr("value", $setup.form.latitude)} disabled${_scopeId}>`);
        if ($setup.form.errors.latitude) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "latitude",
            message: $setup.form.errors.latitude
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="sender" class="form-label"${_scopeId}>Nama Pengirim</label><input class="form-control" id="sender"${ssrRenderAttr("value", $setup.form.sender)}${_scopeId}>`);
        if ($setup.form.errors.sender) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "sender",
            message: $setup.form.errors.sender
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="phone" class="form-label"${_scopeId}>No HP</label><input class="form-control" id="sender"${ssrRenderAttr("value", $setup.form.phone)}${_scopeId}>`);
        if ($setup.form.errors.phone) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "phone",
            message: $setup.form.errors.phone
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-3 mb-3"${_scopeId}><label for="province_id" class="form-label"${_scopeId}>Provinsi</label><select class="form-control mb-3" id="province_id"${_scopeId}><!--[-->`);
        ssrRenderList($setup.other.provinces, (province, i) => {
          _push2(`<option${ssrRenderAttr("value", province.id)}${_scopeId}>${ssrInterpolate(province.name)}</option>`);
        });
        _push2(`<!--]--></select>`);
        if ($setup.form.errors.province_id) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "province_id",
            message: $setup.form.errors.province_id
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="col-lg-3 mb-3"${_scopeId}><label for="city_id" class="form-label"${_scopeId}>Kabupaten / Kota</label><select class="form-control mb-3" id="city_id"${_scopeId}><!--[-->`);
        ssrRenderList($setup.other.cities, (city, i) => {
          _push2(`<option${ssrRenderAttr("value", city.id)}${_scopeId}>${ssrInterpolate(city.name)}</option>`);
        });
        _push2(`<!--]--></select>`);
        if ($setup.form.errors.city_id) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "city_id",
            message: $setup.form.errors.city_id
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="col-lg-3 mb-3"${_scopeId}><label for="subdistrict_id" class="form-label"${_scopeId}>Kecamatan</label><select class="form-control mb-3" id="subdistrict_id"${_scopeId}><!--[-->`);
        ssrRenderList($setup.other.subdistricts, (subdistrict, i) => {
          _push2(`<option${ssrRenderAttr("value", subdistrict.id)}${_scopeId}>${ssrInterpolate(subdistrict.name)}</option>`);
        });
        _push2(`<!--]--></select>`);
        if ($setup.form.errors.subdistrict_id) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "subdistrict_id",
            message: $setup.form.errors.subdistrict_id
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="col-lg-3 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="postal_code" class="form-label"${_scopeId}>Kode Pos</label><input class="form-control" id="postal_code"${ssrRenderAttr("value", $setup.form.postal_code)}${_scopeId}>`);
        if ($setup.form.errors.postal_code) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "postal_code",
            message: $setup.form.errors.postal_code
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-12 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="detail" class="form-label"${_scopeId}>Alamat Detail</label><textarea class="form-control" id="detail" rows="3"${_scopeId}>${ssrInterpolate($setup.form.detail)}</textarea>`);
        if ($setup.form.errors.detail) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "detail",
            message: $setup.form.errors.detail
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-12"${_scopeId}><button class="btn btn-primary btn-sm rounded-custom"${ssrIncludeBooleanAttr($setup.form.processing) ? " disabled" : ""}${_scopeId}><div class="d-flex justify-content-center align-items-center"${_scopeId}>`);
        if ($setup.form.processing) {
          _push2(ssrRenderComponent(_component_SpinnerProcessing, {
            color: "text-white",
            size: "sm",
            me: "me-2"
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<span${_scopeId}><i class="fas fa-save me-2"${_scopeId}></i>Simpan</span></div></button></div></div></form></div></div></div><div class="col-md-12 grid-margin"${_scopeId}><div class="modal fade" id="preview" tabindex="-1" aria-labelledby="previewLabel" aria-hidden="true"${_scopeId}><div class="modal-dialog"${_scopeId}><div class="modal-content rounded-custom"${_scopeId}>`);
        if ($setup.other.preview) {
          _push2(`<div class="modal-body"${_scopeId}><div class="d-flex justify-content-between align-items-center mb-3"${_scopeId}><div class="h5"${_scopeId}>Preview Suplier</div><a${ssrRenderAttr("href", `https://www.google.com/maps/?q=${$setup.other.preview.latitude},${$setup.other.preview.longitude}`)} target="_blank" class="btn btn-primary btn-sm rounded-custom"${_scopeId}><i class="fas fa-location-arrow"${_scopeId}></i></a></div><div class="row"${_scopeId}><div class="col-lg-4"${_scopeId}>Pengirim</div><div class="col-lg-8"${_scopeId}> : ${ssrInterpolate($setup.other.preview.sender)}</div></div><div class="row"${_scopeId}><div class="col-lg-4"${_scopeId}>No HP</div><div class="col-lg-8"${_scopeId}> : ${ssrInterpolate($setup.other.preview.phone)}</div></div><div class="row"${_scopeId}><div class="col-lg-4"${_scopeId}>Provinsi</div><div class="col-lg-8"${_scopeId}> : ${ssrInterpolate($setup.other.preview.subdistrict.city.province.name)}</div></div><div class="row"${_scopeId}><div class="col-lg-4"${_scopeId}>Kota / Kabupaten</div><div class="col-lg-8"${_scopeId}> : ${ssrInterpolate($setup.other.preview.subdistrict.city.name)}</div></div><div class="row"${_scopeId}><div class="col-lg-4"${_scopeId}>Kecamatan</div><div class="col-lg-8"${_scopeId}> : ${ssrInterpolate($setup.other.preview.subdistrict.name)}</div></div><div class="row"${_scopeId}><div class="col-lg-4"${_scopeId}>Kode Pos</div><div class="col-lg-8"${_scopeId}> : ${ssrInterpolate($setup.other.preview.postal_code)}</div></div><div class="row"${_scopeId}><div class="col-lg-4"${_scopeId}>Alamat Detail</div><div class="col-lg-8"${_scopeId}> : ${ssrInterpolate($setup.other.preview.detail)}</div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div><div class="card"${_scopeId}><div class="card-body"${_scopeId}><div class="row"${_scopeId}><div class="col-lg-12"${_scopeId}><div class="table-responsive"${_scopeId}><table class="table"${_scopeId}><thead class="table-dark"${_scopeId}><tr${_scopeId}><th${_scopeId}>No</th><th${_scopeId}>Pengirim</th><th${_scopeId}>No Hp</th><th${_scopeId}>Provinsi</th><th${_scopeId}>Kota / Kabupaten</th><th${_scopeId}>Kecamatan</th><th${_scopeId}>Kode Pos</th><th${_scopeId}></th></tr></thead><tbody${_scopeId}><!--[-->`);
        ssrRenderList($props.result.data, (result, i) => {
          _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(i + 1)}</td><td${_scopeId}>${ssrInterpolate(result.sender)}</td><td${_scopeId}>${ssrInterpolate(result.phone)}</td><td${_scopeId}>${ssrInterpolate(result.subdistrict.city.province.name)}</td><td${_scopeId}>${ssrInterpolate(result.subdistrict.city.name)}</td><td${_scopeId}>${ssrInterpolate(result.subdistrict.name)}</td><td${_scopeId}>${ssrInterpolate(result.postal_code)}</td><td class="d-flex justify-content-end"${_scopeId}><button class="btn btn-sm btn-primary me-2 rounded-custom"${_scopeId}><i class="fas fa-eye"${_scopeId}></i></button><button class="btn btn-sm btn-danger me-2 rounded-custom"${_scopeId}><i class="fas fa-trash"${_scopeId}></i></button></td></tr>`);
        });
        _push2(`<!--]--></tbody></table>`);
        _push2(ssrRenderComponent(_component_Pagination, {
          class: "mt-2",
          links: $props.result.links,
          from: $props.result.from,
          to: $props.result.to,
          total: $props.result.total
        }, null, _parent2, _scopeId));
        _push2(`</div></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "row" }, [
            createVNode("div", { class: "col-md-12 grid-margin" }, [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("form", {
                    onSubmit: withModifiers($setup.submit, ["prevent"])
                  }, [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col-lg-12 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "address",
                            class: "form-label d-flex justify-content-between"
                          }, [
                            createVNode("span", null, "Lokasi")
                          ]),
                          createVNode(_component_GMapAutocomplete, {
                            placeholder: "Cari...",
                            onPlace_changed: $setup.setPlace,
                            class: "form-control mb-2"
                          }, null, 8, ["onPlace_changed"]),
                          createVNode(_component_GMapMap, {
                            style: { "width": "100%", "height": "500px" },
                            center: {
                              lat: $setup.form.latitude,
                              lng: $setup.form.longitude
                            },
                            zoom: 15,
                            onClick: $setup.dragend
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_GMapMarker, {
                                position: {
                                  lat: $setup.form.latitude,
                                  lng: $setup.form.longitude
                                },
                                clickable: true,
                                draggable: true,
                                onDrag: $setup.dragend
                              }, null, 8, ["position", "onDrag"])
                            ]),
                            _: 1
                          }, 8, ["center", "onClick"])
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "longitude",
                            class: "form-label"
                          }, "Longitude"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "longitude",
                            "onUpdate:modelValue": ($event) => $setup.form.longitude = $event,
                            disabled: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.longitude]
                          ]),
                          $setup.form.errors.longitude ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "longitude",
                            message: $setup.form.errors.longitude
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "latitude",
                            class: "form-label"
                          }, "Latitude"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "latitude",
                            "onUpdate:modelValue": ($event) => $setup.form.latitude = $event,
                            disabled: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.latitude]
                          ]),
                          $setup.form.errors.latitude ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "latitude",
                            message: $setup.form.errors.latitude
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "sender",
                            class: "form-label"
                          }, "Nama Pengirim"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "sender",
                            "onUpdate:modelValue": ($event) => $setup.form.sender = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.sender]
                          ]),
                          $setup.form.errors.sender ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "sender",
                            message: $setup.form.errors.sender
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "phone",
                            class: "form-label"
                          }, "No HP"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "sender",
                            "onUpdate:modelValue": ($event) => $setup.form.phone = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.phone]
                          ]),
                          $setup.form.errors.phone ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "phone",
                            message: $setup.form.errors.phone
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-3 mb-3" }, [
                        createVNode("label", {
                          for: "province_id",
                          class: "form-label"
                        }, "Provinsi"),
                        withDirectives(createVNode("select", {
                          class: "form-control mb-3",
                          "onUpdate:modelValue": ($event) => $setup.form.province_id = $event,
                          id: "province_id",
                          onChange: ($event) => $setup.getCity($setup.form.province_id)
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList($setup.other.provinces, (province, i) => {
                            return openBlock(), createBlock("option", {
                              value: province.id,
                              key: i
                            }, toDisplayString(province.name), 9, ["value"]);
                          }), 128))
                        ], 40, ["onUpdate:modelValue", "onChange"]), [
                          [vModelSelect, $setup.form.province_id]
                        ]),
                        $setup.form.errors.province_id ? (openBlock(), createBlock(_component_FormText, {
                          key: 0,
                          id: "province_id",
                          message: $setup.form.errors.province_id
                        }, null, 8, ["message"])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "col-lg-3 mb-3" }, [
                        createVNode("label", {
                          for: "city_id",
                          class: "form-label"
                        }, "Kabupaten / Kota"),
                        withDirectives(createVNode("select", {
                          class: "form-control mb-3",
                          "onUpdate:modelValue": ($event) => $setup.form.city_id = $event,
                          id: "city_id",
                          onChange: ($event) => $setup.getSubdistrict($setup.form.city_id)
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList($setup.other.cities, (city, i) => {
                            return openBlock(), createBlock("option", {
                              value: city.id,
                              key: i
                            }, toDisplayString(city.name), 9, ["value"]);
                          }), 128))
                        ], 40, ["onUpdate:modelValue", "onChange"]), [
                          [vModelSelect, $setup.form.city_id]
                        ]),
                        $setup.form.errors.city_id ? (openBlock(), createBlock(_component_FormText, {
                          key: 0,
                          id: "city_id",
                          message: $setup.form.errors.city_id
                        }, null, 8, ["message"])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "col-lg-3 mb-3" }, [
                        createVNode("label", {
                          for: "subdistrict_id",
                          class: "form-label"
                        }, "Kecamatan"),
                        withDirectives(createVNode("select", {
                          class: "form-control mb-3",
                          "onUpdate:modelValue": ($event) => $setup.form.subdistrict_id = $event,
                          id: "subdistrict_id"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList($setup.other.subdistricts, (subdistrict, i) => {
                            return openBlock(), createBlock("option", {
                              value: subdistrict.id,
                              key: i
                            }, toDisplayString(subdistrict.name), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, $setup.form.subdistrict_id]
                        ]),
                        $setup.form.errors.subdistrict_id ? (openBlock(), createBlock(_component_FormText, {
                          key: 0,
                          id: "subdistrict_id",
                          message: $setup.form.errors.subdistrict_id
                        }, null, 8, ["message"])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "col-lg-3 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "postal_code",
                            class: "form-label"
                          }, "Kode Pos"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "postal_code",
                            "onUpdate:modelValue": ($event) => $setup.form.postal_code = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.postal_code]
                          ]),
                          $setup.form.errors.postal_code ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "postal_code",
                            message: $setup.form.errors.postal_code
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-12 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "detail",
                            class: "form-label"
                          }, "Alamat Detail"),
                          withDirectives(createVNode("textarea", {
                            class: "form-control",
                            id: "detail",
                            rows: "3",
                            "onUpdate:modelValue": ($event) => $setup.form.detail = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.detail]
                          ]),
                          $setup.form.errors.detail ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "detail",
                            message: $setup.form.errors.detail
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-12" }, [
                        createVNode("button", {
                          class: "btn btn-primary btn-sm rounded-custom",
                          disabled: $setup.form.processing
                        }, [
                          createVNode("div", { class: "d-flex justify-content-center align-items-center" }, [
                            $setup.form.processing ? (openBlock(), createBlock(_component_SpinnerProcessing, {
                              key: 0,
                              color: "text-white",
                              size: "sm",
                              me: "me-2"
                            })) : createCommentVNode("", true),
                            createVNode("span", null, [
                              createVNode("i", { class: "fas fa-save me-2" }),
                              createTextVNode("Simpan")
                            ])
                          ])
                        ], 8, ["disabled"])
                      ])
                    ])
                  ], 40, ["onSubmit"])
                ])
              ])
            ]),
            createVNode("div", { class: "col-md-12 grid-margin" }, [
              createVNode("div", {
                class: "modal fade",
                id: "preview",
                tabindex: "-1",
                "aria-labelledby": "previewLabel",
                "aria-hidden": "true"
              }, [
                createVNode("div", { class: "modal-dialog" }, [
                  createVNode("div", { class: "modal-content rounded-custom" }, [
                    $setup.other.preview ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "modal-body"
                    }, [
                      createVNode("div", { class: "d-flex justify-content-between align-items-center mb-3" }, [
                        createVNode("div", { class: "h5" }, "Preview Suplier"),
                        createVNode("a", {
                          href: `https://www.google.com/maps/?q=${$setup.other.preview.latitude},${$setup.other.preview.longitude}`,
                          target: "_blank",
                          class: "btn btn-primary btn-sm rounded-custom"
                        }, [
                          createVNode("i", { class: "fas fa-location-arrow" })
                        ], 8, ["href"])
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-4" }, "Pengirim"),
                        createVNode("div", { class: "col-lg-8" }, " : " + toDisplayString($setup.other.preview.sender), 1)
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-4" }, "No HP"),
                        createVNode("div", { class: "col-lg-8" }, " : " + toDisplayString($setup.other.preview.phone), 1)
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-4" }, "Provinsi"),
                        createVNode("div", { class: "col-lg-8" }, " : " + toDisplayString($setup.other.preview.subdistrict.city.province.name), 1)
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-4" }, "Kota / Kabupaten"),
                        createVNode("div", { class: "col-lg-8" }, " : " + toDisplayString($setup.other.preview.subdistrict.city.name), 1)
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-4" }, "Kecamatan"),
                        createVNode("div", { class: "col-lg-8" }, " : " + toDisplayString($setup.other.preview.subdistrict.name), 1)
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-4" }, "Kode Pos"),
                        createVNode("div", { class: "col-lg-8" }, " : " + toDisplayString($setup.other.preview.postal_code), 1)
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-4" }, "Alamat Detail"),
                        createVNode("div", { class: "col-lg-8" }, " : " + toDisplayString($setup.other.preview.detail), 1)
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "col-lg-12" }, [
                      createVNode("div", { class: "table-responsive" }, [
                        createVNode("table", { class: "table" }, [
                          createVNode("thead", { class: "table-dark" }, [
                            createVNode("tr", null, [
                              createVNode("th", null, "No"),
                              createVNode("th", null, "Pengirim"),
                              createVNode("th", null, "No Hp"),
                              createVNode("th", null, "Provinsi"),
                              createVNode("th", null, "Kota / Kabupaten"),
                              createVNode("th", null, "Kecamatan"),
                              createVNode("th", null, "Kode Pos"),
                              createVNode("th")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList($props.result.data, (result, i) => {
                              return openBlock(), createBlock("tr", { key: i }, [
                                createVNode("td", null, toDisplayString(i + 1), 1),
                                createVNode("td", null, toDisplayString(result.sender), 1),
                                createVNode("td", null, toDisplayString(result.phone), 1),
                                createVNode("td", null, toDisplayString(result.subdistrict.city.province.name), 1),
                                createVNode("td", null, toDisplayString(result.subdistrict.city.name), 1),
                                createVNode("td", null, toDisplayString(result.subdistrict.name), 1),
                                createVNode("td", null, toDisplayString(result.postal_code), 1),
                                createVNode("td", { class: "d-flex justify-content-end" }, [
                                  createVNode("button", {
                                    class: "btn btn-sm btn-primary me-2 rounded-custom",
                                    onClick: ($event) => $setup.preview(result)
                                  }, [
                                    createVNode("i", { class: "fas fa-eye" })
                                  ], 8, ["onClick"]),
                                  createVNode("button", {
                                    class: "btn btn-sm btn-danger me-2 rounded-custom",
                                    onClick: ($event) => $setup.destroy(result.id)
                                  }, [
                                    createVNode("i", { class: "fas fa-trash" })
                                  ], 8, ["onClick"])
                                ])
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode(_component_Pagination, {
                          class: "mt-2",
                          links: $props.result.links,
                          from: $props.result.from,
                          to: $props.result.to,
                          total: $props.result.total
                        }, null, 8, ["links", "from", "to", "total"])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Origin/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
