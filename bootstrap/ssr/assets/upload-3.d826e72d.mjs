import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const language = {
  zh: {
    hint: "\u70B9\u51FB\uFF0C\u6216\u62D6\u52A8\u56FE\u7247\u81F3\u6B64\u5904",
    loading: "\u6B63\u5728\u4E0A\u4F20\u2026\u2026",
    noSupported: "\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u8BE5\u529F\u80FD\uFF0C\u8BF7\u4F7F\u7528IE10\u4EE5\u4E0A\u6216\u5176\u4ED6\u73B0\u5728\u6D4F\u89C8\u5668\uFF01",
    success: "\u4E0A\u4F20\u6210\u529F",
    fail: "\u56FE\u7247\u4E0A\u4F20\u5931\u8D25",
    preview: "\u5934\u50CF\u9884\u89C8",
    btn: {
      off: "\u53D6\u6D88",
      close: "\u5173\u95ED",
      back: "\u4E0A\u4E00\u6B65",
      save: "\u4FDD\u5B58"
    },
    error: {
      onlyImg: "\u4EC5\u9650\u56FE\u7247\u683C\u5F0F",
      outOfSize: "\u5355\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ",
      lowestPx: "\u56FE\u7247\u6700\u4F4E\u50CF\u7D20\u4E3A\uFF08\u5BBD*\u9AD8\uFF09\uFF1A"
    }
  },
  "zh-tw": {
    hint: "\u9EDE\u64CA\uFF0C\u6216\u62D6\u52D5\u5716\u7247\u81F3\u6B64\u8655",
    loading: "\u6B63\u5728\u4E0A\u50B3\u2026\u2026",
    noSupported: "\u700F\u89BD\u5668\u4E0D\u652F\u6301\u8A72\u529F\u80FD\uFF0C\u8ACB\u4F7F\u7528IE10\u4EE5\u4E0A\u6216\u5176\u4ED6\u73FE\u4EE3\u700F\u89BD\u5668\uFF01",
    success: "\u4E0A\u50B3\u6210\u529F",
    fail: "\u5716\u7247\u4E0A\u50B3\u5931\u6557",
    preview: "\u982D\u50CF\u9810\u89BD",
    btn: {
      off: "\u53D6\u6D88",
      close: "\u95DC\u9589",
      back: "\u4E0A\u4E00\u6B65",
      save: "\u4FDD\u5B58"
    },
    error: {
      onlyImg: "\u50C5\u9650\u5716\u7247\u683C\u5F0F",
      outOfSize: "\u55AE\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u904E ",
      lowestPx: "\u5716\u7247\u6700\u4F4E\u50CF\u7D20\u70BA\uFF08\u5BEC*\u9AD8\uFF09\uFF1A"
    }
  },
  en: {
    hint: "Click or drag the file here to upload",
    loading: "Uploading\u2026",
    noSupported: "Browser is not supported, please use IE10+ or other browsers",
    success: "Upload success",
    fail: "Upload failed",
    preview: "Preview",
    btn: {
      off: "Cancel",
      close: "Close",
      back: "Back",
      save: "Save"
    },
    error: {
      onlyImg: "Image only",
      outOfSize: "Image exceeds size limit: ",
      lowestPx: "Image's size is too low. Expected at least: "
    }
  },
  ro: {
    hint: "Atinge sau trage fi\u0219ierul aici",
    loading: "Se \xEEncarc\u0103",
    noSupported: "Browser-ul t\u0103u nu suport\u0103 acest feature. Te rug\u0103m \xEEncearc\u0103 cu alt browser.",
    success: "S-a \xEEnc\u0103rcat cu succes",
    fail: "A ap\u0103rut o problem\u0103 la \xEEnc\u0103rcare",
    preview: "Previzualizeaz\u0103",
    btn: {
      off: "Anuleaz\u0103",
      close: "\xCEnchide",
      back: "\xCEnapoi",
      save: "Salveaz\u0103"
    },
    error: {
      onlyImg: "Doar imagini",
      outOfSize: "Imaginea dep\u0103\u0219e\u0219te limita de: ",
      loewstPx: "Imaginea este prea mic\u0103; Minim: "
    }
  },
  ru: {
    hint: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B \u0432 \u044D\u0442\u043E \u043E\u043A\u043D\u043E",
    loading: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u2026\u2026",
    noSupported: "\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 IE10 + \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u044B",
    success: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E",
    fail: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",
    preview: "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",
    btn: {
      off: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
      close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
      back: "\u041D\u0430\u0437\u0430\u0434",
      save: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
    },
    error: {
      onlyImg: "\u0422\u043E\u043B\u044C\u043A\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
      outOfSize: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 \u043F\u0440\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440: ",
      lowestPx: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F: "
    }
  },
  "pt-br": {
    hint: "Clique ou arraste o arquivo aqui para carregar",
    loading: "Carregando...",
    noSupported: "Browser n\xE3o suportado, por favor utilize o Internet Explorer 10+ ou outro browser",
    success: "Imagem carregada com sucesso",
    fail: "Ocorreu um erro ao carregar a imagem",
    preview: "Pr\xE9-visualiza\xE7\xE3o",
    btn: {
      off: "Cancelar",
      close: "Fechar",
      back: "Voltar",
      save: "Salvar"
    },
    error: {
      onlyImg: "Por favor envie apenas imagens",
      outOfSize: "A imagem excede o limite de tamanho suportado: ",
      lowestPx: "O tamanho da imagem \xE9 muito pequeno. Tamanho m\xEDnimo: "
    }
  },
  "pt-pt": {
    hint: "Clique ou arraste o arquivo para a janela para carregar",
    loading: "A processar...",
    noSupported: "Browser n\xE3o suportado, por favor utilize o Internet Explorer 10+ ou outro browser",
    success: "Imagem carregada com sucesso",
    fail: "Ocorreu um erro ao carregar a imagem",
    preview: "Pr\xE9-visualiza\xE7\xE3o",
    btn: {
      off: "Cancelar",
      close: "Fechar",
      back: "Voltar",
      save: "Guardar"
    },
    error: {
      onlyImg: "Por favor envie apenas imagens",
      outOfSize: "A imagem excede o limite de tamanho suportado: ",
      lowestPx: "O tamanho da imagem \xE9 muito pequeno. Tamanho m\xEDnimo: "
    }
  },
  fr: {
    hint: "Cliquez ou glissez le fichier ici.",
    loading: "T\xE9l\xE9chargement\u2026",
    noSupported: "Votre navigateur n'est pas support\xE9. Utilisez IE10 + ou un autre navigateur s'il vous pla\xEEt.",
    success: "T\xE9l\xE9chargement r\xE9ussi",
    fail: "T\xE9l\xE9chargement echou\xE9",
    preview: "Aper\xE7u",
    btn: {
      off: "Annuler",
      close: "Fermer",
      back: "Retour",
      save: "Enregistrer"
    },
    error: {
      onlyImg: "Image uniquement",
      outOfSize: "L'image s\xE9lectionn\xE9e d\xE9passe la taille maximum: ",
      lowestPx: "L'image s\xE9lectionn\xE9e est trop petite. Dimensions attendues: "
    }
  },
  nl: {
    hint: "Klik hier of sleep een afbeelding in dit vlak",
    loading: "Uploaden\u2026",
    noSupported: "Je browser wordt helaas niet ondersteund. Gebruik IE10+ of een andere browser.",
    success: "Upload succesvol",
    fail: "Upload mislukt",
    preview: "Voorbeeld",
    btn: {
      off: "Annuleren",
      close: "Sluiten",
      back: "Terug",
      save: "Opslaan"
    },
    error: {
      onlyImg: "Alleen afbeeldingen",
      outOfSize: "De afbeelding is groter dan: ",
      lowestPx: "De afbeelding is te klein! Minimale afmetingen: "
    }
  },
  tr: {
    hint: "T\u0131kla veya y\xFCklemek istedi\u011Fini buraya s\xFCr\xFCkle",
    loading: "Y\xFCkleniyor\u2026",
    noSupported: "Taray\u0131c\u0131 desteklenmiyor, l\xFCtfen IE10+ veya farkl\u0131 taray\u0131c\u0131 kullan\u0131n",
    success: "Y\xFCkleme ba\u015Far\u0131l\u0131",
    fail: "Y\xFCklemede hata olu\u015Ftu",
    preview: "\xD6nizle",
    btn: {
      off: "\u0130ptal",
      close: "Kapat",
      back: "Geri",
      save: "Kaydet"
    },
    error: {
      onlyImg: "Sadece resim",
      outOfSize: "Resim y\xFCkleme limitini a\u015F\u0131yor: ",
      lowestPx: "Resmin boyutu \xE7ok k\xFC\xE7\xFCk. En az olmas\u0131 gereken: "
    }
  },
  "es-MX": {
    hint: "Selecciona o arrastra una imagen",
    loading: "Subiendo...",
    noSupported: "Tu navegador no es soportado, por favor usa IE10+ u otros navegadores m\xE1s recientes",
    success: "Subido exitosamente",
    fail: "Sucedi\xF3 un error",
    preview: "Vista previa",
    btn: {
      off: "Cancelar",
      close: "Cerrar",
      back: "Atr\xE1s",
      save: "Guardar"
    },
    error: {
      onlyImg: "\xDAnicamente im\xE1genes",
      outOfSize: "La imagen excede el tama\xF1o maximo:",
      lowestPx: "La imagen es demasiado peque\xF1a. Se espera por lo menos:"
    }
  },
  de: {
    hint: "Klick hier oder zieh eine Datei hier rein zum Hochladen",
    loading: "Hochladen\u2026",
    noSupported: "Browser wird nicht unterst\xFCtzt, bitte verwende IE10+ oder andere Browser",
    success: "Upload erfolgreich",
    fail: "Upload fehlgeschlagen",
    preview: "Vorschau",
    btn: {
      off: "Abbrechen",
      close: "Schlie\xDFen",
      back: "Zur\xFCck",
      save: "Speichern"
    },
    error: {
      onlyImg: "Nur Bilder",
      outOfSize: "Das Bild ist zu gro\xDF: ",
      lowestPx: "Das Bild ist zu klein. Mindestens: "
    }
  },
  ja: {
    hint: "\u30AF\u30EA\u30C3\u30AF\u30FB\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u30D5\u30A1\u30A4\u30EB\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",
    loading: "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u4E2D...",
    noSupported: "\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u306F\u5BFE\u5FDC\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002IE10+\u304B\u305D\u306E\u4ED6\u306E\u4E3B\u8981\u30D6\u30E9\u30A6\u30B6\u3092\u304A\u4F7F\u3044\u304F\u3060\u3055\u3044\u3002",
    success: "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u6210\u529F",
    fail: "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u5931\u6557",
    preview: "\u30D7\u30EC\u30D3\u30E5\u30FC",
    btn: {
      off: "\u30AD\u30E3\u30F3\u30BB\u30EB",
      close: "\u9589\u3058\u308B",
      back: "\u623B\u308B",
      save: "\u4FDD\u5B58"
    },
    error: {
      onlyImg: "\u753B\u50CF\u306E\u307F",
      outOfSize: "\u753B\u50CF\u30B5\u30A4\u30BA\u304C\u4E0A\u9650\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002\u4E0A\u9650: ",
      lowestPx: "\u753B\u50CF\u304C\u5C0F\u3055\u3059\u304E\u307E\u3059\u3002\u6700\u5C0F\u30B5\u30A4\u30BA: "
    }
  },
  ua: {
    hint: "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0430\u0431\u043E \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0456\u0442\u044C \u0444\u0430\u0439\u043B \u0432 \u0446\u0435 \u0432\u0456\u043A\u043D\u043E",
    loading: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u044E\u2026\u2026",
    noSupported: "\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u044C\u0441\u044F, \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0439\u0442\u0435\u0441\u044C IE10 + \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u043C\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u043C\u0438",
    success: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E",
    fail: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F",
    preview: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434",
    btn: {
      off: "\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438",
      close: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
      back: "\u041D\u0430\u0437\u0430\u0434",
      save: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"
    },
    error: {
      onlyImg: "\u0422\u0456\u043B\u044C\u043A\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
      outOfSize: "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u0432\u0438\u0449\u0443\u0454 \u0433\u0440\u0430\u043D\u0438\u0447\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440: ",
      lowestPx: "\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F: "
    }
  },
  it: {
    hint: "Clicca o trascina qui il file per caricarlo",
    loading: "Caricamento del file\u2026",
    noSupported: "Browser non supportato, per favore usa IE10+ o un altro browser",
    success: "Caricamento completato",
    fail: "Caricamento fallito",
    preview: "Anteprima",
    btn: {
      off: "Annulla",
      close: "Chiudi",
      back: "Indietro",
      save: "Salva"
    },
    error: {
      onlyImg: "Sono accettate solo immagini",
      outOfSize: "L'immagine eccede i limiti di dimensione: ",
      lowestPx: "L'immagine \xE8 troppo piccola. Il requisito minimo \xE8: "
    }
  },
  ar: {
    hint: "\u0627\u0636\u063A\u0637 \u0623\u0648 \u0627\u0633\u062D\u0628 \u0627\u0644\u0645\u0644\u0641 \u0647\u0646\u0627 \u0644\u0644\u062A\u062D\u0645\u064A\u0644",
    loading: "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...",
    noSupported: "\u0627\u0644\u0645\u062A\u0635\u0641\u062D \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645 \u060C \u064A\u0631\u062C\u0649 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 IE10 + \u0623\u0648 \u0645\u062A\u0635\u0641\u062D \u0623\u062E\u0631",
    success: "\u062A\u0645 \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0628\u0646\u062C\u0627\u062D",
    fail: "\u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
    preview: "\u0645\u0639\u0627\u064A\u0646\u0647",
    btn: {
      off: "\u0625\u0644\u063A\u0627\u0621",
      close: "\u0625\u063A\u0644\u0627\u0642",
      back: "\u0631\u062C\u0648\u0639",
      save: "\u062D\u0641\u0638"
    },
    error: {
      onlyImg: "\u0635\u0648\u0631 \u0641\u0642\u0637",
      outOfSize: "\u062A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0635\u0648\u0631\u0647 \u0627\u0644\u062D\u062C\u0645 \u0627\u0644\u0645\u062D\u062F\u062F: ",
      lowestPx: "\u062D\u062C\u0645 \u0627\u0644\u0635\u0648\u0631\u0629 \u0635\u063A\u064A\u0631 \u062C\u062F\u0627. \u0645\u0646 \u0627\u0644\u0645\u062A\u0648\u0642\u0639 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644: "
    }
  },
  ug: {
    hint: "\u0645\u06D5\u0632\u0643\u06C7\u0631 \u062F\u0627\u0626\u0649\u0631\u0649\u0646\u0649 \u0686\u0649\u0643\u0649\u067E \u0631\u06D5\u0633\u0649\u0645 \u062A\u0627\u0644\u0644\u0627\u06AD \u064A\u0627\u0643\u0649 \u0631\u06D5\u0633\u0649\u0645\u0646\u0649 \u0633\u06C6\u0631\u06D5\u067E \u0626\u06D5\u0643\u0649\u0631\u0649\u06AD",
    loading: "\u064A\u0648\u0644\u0644\u0649\u0646\u0649\u06CB\u0627\u062A\u0649\u062F\u06C7...",
    noSupported: "\u062A\u0648\u0631 \u0643\u06C6\u0631\u06AF\u06C8\u0686 \u0628\u06C7 \u0626\u0649\u0642\u062A\u0649\u062F\u0627\u0631\u0646\u0649 \u0642\u0648\u0644\u0644\u0649\u0645\u0627\u064A\u062F\u06C7 \u060C \u064A\u06C7\u0642\u0649\u0631\u0649 \u0646\u06D5\u0634\u0649\u0631\u062F\u0649\u0643\u0649 \u062A\u0648\u0631 \u0643\u06C6\u0631\u06AF\u06C8\u0686\u0646\u0649 \u0626\u0649\u0634\u0644\u0649\u062A\u0649\u06AD",
    success: "\u063A\u06D5\u0644\u0628\u0649\u0644\u0649\u0643 \u0628\u0648\u0644\u062F\u0649",
    fail: "\u0645\u06D5\u063A\u0644\u06C7\u0628 \u0628\u0648\u0644\u062F\u0649",
    preview: "\u0626\u06C8\u0646\u06C8\u0645 \u0631\u06D5\u0633\u0649\u0645",
    btn: {
      off: "\u0628\u0648\u0644\u062F\u0649 \u0642\u0649\u0644\u0649\u0634",
      close: "\u062A\u0627\u0642\u0627\u0634",
      back: "\u0626\u0627\u0644\u062F\u0649\u0646\u0642\u0649 \u0642\u06D5\u062F\u06D5\u0645",
      save: "\u0633\u0627\u0642\u0644\u0627\u0634"
    },
    error: {
      onlyImg: "\u067E\u06D5\u0642\u06D5\u062A \u0631\u06D5\u0633\u0649\u0645 \u0641\u0648\u0631\u0645\u0627\u062A\u0649\u0646\u0649\u0644\u0627 \u0642\u0648\u0644\u0644\u0627\u064A\u062F\u06C7",
      outOfSize: "\u0631\u06D5\u0633\u0649\u0645 \u0686\u0648\u06AD - \u0643\u0649\u0686\u0649\u0643\u0644\u0649\u0643\u0649 \u0686\u06D5\u0643\u062A\u0649\u0646 \u0626\u0649\u0634\u0649\u067E \u0643\u06D5\u062A\u062A\u0649",
      lowestPx: "\u0631\u06D5\u0633\u0649\u0645\u0646\u0649\u06AD \u0626\u06D5\u06AD \u0643\u0649\u0686\u0649\u0643 \u0626\u06C6\u0644\u0686\u0649\u0645\u0649 :"
    }
  },
  th: {
    hint: "\u0E04\u0E25\u0E34\u0E4A\u0E01\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E32\u0E01\u0E23\u0E39\u0E1B\u0E21\u0E32\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48",
    loading: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u2026",
    noSupported: "\u0E40\u0E1A\u0E23\u0E32\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E44\u0E21\u0E48\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A, \u0E01\u0E23\u0E38\u0E13\u0E32\u0E43\u0E0A\u0E49 IE \u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E0A\u0E31\u0E48\u0E19 10 \u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B \u0E2B\u0E23\u0E37\u0E2D\u0E43\u0E0A\u0E49\u0E40\u0E1A\u0E23\u0E32\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E15\u0E31\u0E27\u0E2D\u0E37\u0E48\u0E19",
    success: "\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
    fail: "\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27",
    preview: "\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",
    btn: {
      off: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
      close: "\u0E1B\u0E34\u0E14",
      back: "\u0E01\u0E25\u0E31\u0E1A",
      save: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"
    },
    error: {
      onlyImg: "\u0E44\u0E1F\u0E25\u0E4C\u0E20\u0E32\u0E1E\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19",
      outOfSize: "\u0E44\u0E1F\u0E25\u0E4C\u0E43\u0E2B\u0E0D\u0E48\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ",
      lowestPx: "\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E25\u0E47\u0E01\u0E40\u0E01\u0E34\u0E19\u0E44\u0E1B. \u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E02\u0E19\u0E32\u0E14: "
    }
  },
  mm: {
    hint: "\u1016\u102D\u102F\u1004\u103A\u1000\u102D\u102F \u1024\u1014\u1031\u101B\u102C\u1010\u103D\u1004\u103A \u1014\u103E\u102D\u1015\u103A\u104D (\u101E\u102D\u102F\u1037) \u1006\u103D\u1032\u1011\u100A\u1037\u103A\u104D \u1010\u1004\u103A\u1015\u102B",
    loading: "\u1010\u1004\u103A\u1014\u1031\u101E\u100A\u103A\u2026",
    noSupported: "\u1024\u1018\u101B\u1031\u102C\u1000\u103A\u1007\u102C\u1000\u102D\u102F \u1021\u1011\u1031\u102C\u1000\u103A\u1021\u1015\u1036\u1037 \u1019\u1015\u1031\u1038\u1015\u102B\u104A \u1000\u103B\u1031\u1038\u1007\u1030\u1038\u1015\u103C\u102F\u104D IE10+ \u101E\u102D\u102F\u1037\u1019\u101F\u102F\u1010\u103A \u1021\u1001\u103C\u102C\u1038 \u1018\u101B\u1031\u102C\u1000\u103A\u1007\u102C \u1000\u102D\u102F \u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1015\u102B",
    success: "\u1016\u102D\u102F\u1004\u103A\u1010\u1004\u103A\u1014\u1031\u1019\u103E\u102F \u1019\u1015\u103C\u102E\u1038\u1019\u103C\u1031\u102C\u1000\u103A\u1015\u102B",
    fail: "\u1016\u102D\u102F\u1004\u103A\u1010\u1004\u103A\u1014\u1031\u1019\u103E\u102F \u1019\u1021\u1031\u102C\u1004\u103A\u1019\u103C\u1004\u103A\u1015\u102B",
    preview: "\u1021\u1005\u1019\u103A\u1038\u1000\u103C\u100A\u1037\u103A",
    btn: {
      off: "\u1019\u101C\u102F\u1015\u103A\u1010\u1031\u102C\u1037\u1015\u102B",
      close: "\u1015\u102D\u1010\u103A\u1019\u100A\u103A",
      back: "\u1014\u1031\u102C\u1000\u103A\u101E\u102D\u102F\u1037",
      save: "\u101E\u102D\u1019\u103A\u1038\u1019\u100A\u103A"
    },
    error: {
      onlyImg: "\u1013\u102C\u1010\u103A\u1015\u102F\u1036 \u101E\u102E\u1038\u101E\u1014\u1037\u103A\u101E\u102C",
      outOfSize: "\u1013\u102C\u1010\u103A\u1015\u102F\u1036\u1006\u102D\u102F\u1012\u103A \u1000\u103C\u102E\u1038\u101C\u103D\u1014\u103A\u1038\u101E\u100A\u103A \u104B \u1021\u1019\u103B\u102C\u1038\u1006\u102F\u1036\u1038 \u1006\u102D\u102F\u1012\u103A : ",
      lowestPx: "\u1013\u102C\u1010\u103A\u1015\u102F\u1036\u1006\u102D\u102F\u1012\u103A \u101E\u1031\u1038\u101C\u103D\u1014\u103A\u1038\u101E\u100A\u103A\u104B \u1021\u1014\u100A\u103A\u1038\u1006\u102F\u1036\u1038 \u1006\u102D\u102F\u1012\u103A : "
    }
  },
  se: {
    hint: "Klicka eller dra en fil hit f\xF6r att ladda upp den",
    loading: "Laddar upp\u2026",
    noSupported: "Din webbl\xE4sare st\xF6ds inte, v\xE4nligen anv\xE4nd IE10+ eller andra webbl\xE4sare",
    success: "Uppladdning lyckades",
    fail: "Uppladdning misslyckades",
    preview: "F\xF6rhandsgranska",
    btn: {
      off: "Avbryt",
      close: "St\xE4ng",
      back: "Tillbaka",
      save: "Spara"
    },
    error: {
      onlyImg: "Endast bilder",
      outOfSize: "Bilden \xE4r st\xF6rre \xE4n max-gr\xE4nsen: ",
      lowestPx: "Bilden \xE4r f\xF6r liten. Minimum \xE4r: "
    }
  },
  pl: {
    hint: "Kliknij lub upu\u015B\u0107 plik tutaj",
    loading: "Wgrywanie\u2026",
    noSupported: "Twoja przegl\u0105darka nie jest wspierana, u\u017Cyj IE10+ lub innej przegl\u0105darki",
    success: "B\u0142\u0105d",
    fail: "Sukces",
    preview: "Podgl\u0105d",
    btn: {
      off: "Anuluj",
      close: "Zamknij",
      back: "Wstecz",
      save: "Zapisz"
    },
    error: {
      onlyImg: "Tylko obrazki",
      outOfSize: "Rozmiar obrazka przekracza: ",
      lowestPx: "Obrazek jest za ma\u0142y. Minimalne wymiary to: "
    }
  },
  vi: {
    hint: "B\u1EA5m ho\u1EB7c k\xE9o th\u1EA3 file \u0111\u1EC3 t\u1EA3i l\xEAn",
    loading: "\u0110ang t\u1EA3i l\xEAn...",
    noSupported: "Tr\xECnh duy\u1EC7t kh\xF4ng h\u1ED7 tr\u1EE3, h\xE3y s\u1EED d\u1EE5ng IE10+ ho\u1EB7c tr\xECnh duy\u1EC7t kh\xE1c",
    success: "T\u1EA3i l\xEAn th\xE0nh c\xF4ng",
    fail: "T\u1EA3i l\xEAn th\u1EA5t b\u1EA1i",
    preview: "Xem tr\u01B0\u1EDBc",
    btn: {
      off: "Hu\u1EF7",
      close: "\u0110\xF3ng",
      back: "Tr\u1EDF l\u1EA1i",
      save: "L\u01B0u"
    },
    error: {
      onlyImg: "Ch\u1EC9 h\xECnh \u1EA3nh",
      outOfSize: "H\xECnh \u1EA3nh v\u01B0\u1EE3t qu\xE1 gi\u1EDBi h\u1EA1n cho ph\xE9p: ",
      lowestPx: "K\xEDch th\u01B0\u1EDBc h\xECnh qu\xE1 nh\u1ECF. K\xEDch th\u01B0\u1EDBc t\u1ED1i thi\u1EC3u: "
    }
  },
  fa: {
    hint: "\u0628\u0631\u0627\u06CC \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u062A\u0635\u0648\u06CC\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F \u06CC\u0627 \u062A\u0635\u0648\u06CC\u0631 \u0631\u0627 \u0628\u0647 \u0627\u06CC\u0646 \u0646\u0627\u062D\u06CC\u0647 \u062F\u0631\u06AF \u06A9\u0646\u06CC\u062F",
    loading: "\u062F\u0631 \u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC ...",
    noSupported: "\u0646\u0633\u062E\u0647 \u06CC\u0627 \u0646\u0648\u0639 \u0645\u0631\u0648\u0631\u06AF\u0631 \u0634\u0645\u0627 \u0627\u0632 \u0627\u06CC\u0646 \u0642\u0627\u0628\u0644\u06CC\u062A \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0646\u0645\u06CC\u06A9\u0646\u062F. \u0644\u0637\u0641\u0627 \u0627\u0632 \u0627\u06CC\u0646\u062A\u0631\u0646\u062A \u0627\u06A9\u0633\u067E\u0644\u0648\u0631\u0631 \u0648\u0631\u0698\u0646 \u0628\u0627\u0644\u0627\u062A\u0631 \u0627\u0632 \u062F\u0647 \u06CC\u0627 \u0645\u0631\u0648\u0631\u06AF\u0631\u0647\u0627\u06CC \u062F\u06CC\u06AF\u0631 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F",
    success: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F",
    fail: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0627\u0646\u062C\u0627\u0645 \u0646\u0634\u062F",
    preview: "\u067E\u06CC\u0634\u0646\u0645\u0627\u06CC\u0634",
    btn: {
      off: "\u0644\u063A\u0648",
      close: "\u0628\u0633\u062A\u0646",
      back: "\u0628\u0627\u0632\u06AF\u0634\u062A",
      save: "\u0630\u062E\u06CC\u0631\u0647"
    },
    error: {
      onlyImg: "\u0641\u0642\u0637 \u062A\u0635\u0648\u06CC\u0631",
      outOfSize: "\u062D\u062C\u0645 \u062A\u0635\u0648\u06CC\u0631 \u0628\u06CC\u0634 \u0627\u0632 \u0627\u0646\u062F\u0627\u0632\u0647\u200C\u06CC \u0645\u062C\u0627\u0632 \u0627\u0633\u062A: ",
      lowestPx: "\u062D\u062C\u0645 \u062A\u0635\u0648\u06CC\u0631 \u0628\u0633\u06CC\u0627\u0631 \u067E\u0627\u06CC\u06CC\u0646 \u0627\u0633\u062A\u060C \u062D\u062F\u0627\u0642\u0644 \u0633\u0627\u06CC\u0632 \u062A\u0635\u0648\u06CC\u0631: "
    }
  },
  da: {
    hint: "Klik eller tr\xE6k en fil herhen for at uploade",
    loading: "Uploader\u2026",
    noSupported: "Din browser er ikke underst\xF8ttet, benyt venligst IE10+ eller en anden browser",
    success: "Upload lykkedes",
    fail: "Upload mislykkedes",
    preview: "Preview",
    btn: {
      off: "Fortryd",
      close: "Luk",
      back: "Tilbage",
      save: "Gem"
    },
    error: {
      onlyImg: "Kun billeder",
      outOfSize: "Billedet overskrider st\xF8rrelsesgr\xE6nsen: ",
      lowestPx: "Billedet er for lille. Minimumsst\xF8rrelsen er: "
    }
  },
  ko: {
    hint: "\uD074\uB9AD \uB610\uB294 \uB4DC\uB798\uADF8\uD558\uC5EC \uC774\uBBF8\uC9C0\uB97C \uC5C5\uB85C\uB4DC\uD558\uC138\uC694.",
    loading: "\uC5C5\uB85C\uB4DC \uC911\u2026",
    noSupported: "\uC8C4\uC1A1\uD569\uB2C8\uB2E4, \uC778\uD130\uB137 \uC775\uC2A4\uD50C\uB85C\uB7EC \uBC84\uC804 10 \uC774\uC0C1 \uD639\uC740 \uB2E4\uB978 \uBE0C\uB77C\uC6B0\uC800\uB97C \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694.",
    success: "\uC5C5\uB85C\uB4DC \uC131\uACF5",
    fail: "\uC5C5\uB85C\uB4DC \uC2E4\uD328",
    preview: "\uBBF8\uB9AC\uBCF4\uAE30",
    btn: {
      off: "\uCDE8\uC18C",
      close: "\uB2EB\uAE30",
      back: "\uB4A4\uB85C\uAC00\uAE30",
      save: "\uC800\uC7A5"
    },
    error: {
      onlyImg: "\uC774\uBBF8\uC9C0\uB9CC \uC5C5\uB85C\uB4DC \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
      outOfSize: "\uC5C5\uB85C\uB4DC \uD560 \uC218 \uC788\uB294 \uCD5C\uB300 \uC774\uBBF8\uC9C0 \uC0AC\uC774\uC988\uB97C \uCD08\uACFC\uD588\uC2B5\uB2C8\uB2E4: ",
      lowestPx: "\uC774\uBBF8\uC9C0\uC758 \uD06C\uAE30\uB294 \uC801\uC5B4\uB3C4 \uB2E4\uC74C \uC0AC\uC774\uC988\uBCF4\uB2E4 \uCEE4\uC57C \uD569\uB2C8\uB2E4: "
    }
  }
};
const mimes = {
  "jpg": "image/jpeg",
  "png": "image/png",
  "gif": "image/gif",
  "svg": "image/svg+xml",
  "psd": "image/photoshop"
};
function data2blob(data, mime) {
  data = data.split(",")[1];
  data = window.atob(data);
  var ia = new Uint8Array(data.length);
  for (var i = 0; i < data.length; i++) {
    ia[i] = data.charCodeAt(i);
  }
  return new Blob([ia], {
    type: mime
  });
}
function effectRipple(e, arg_opts) {
  var opts = Object.assign({
    ele: e.target,
    type: "hit",
    bgc: "rgba(0, 0, 0, 0.15)"
  }, arg_opts), target = opts.ele;
  if (target) {
    var rect = target.getBoundingClientRect(), ripple = target.querySelector(".e-ripple");
    if (!ripple) {
      ripple = document.createElement("span");
      ripple.className = "e-ripple";
      ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + "px";
      target.appendChild(ripple);
    } else {
      ripple.className = "e-ripple";
    }
    switch (opts.type) {
      case "center":
        ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + "px";
        ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + "px";
        break;
      default:
        ripple.style.top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop + "px";
        ripple.style.left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft + "px";
    }
    ripple.style.backgroundColor = opts.bgc;
    ripple.className = "e-ripple z-active";
    return false;
  }
}
const upload3_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  props: {
    field: {
      type: String,
      "default": "avatar"
    },
    ki: {
      type: String,
      "default": "0"
    },
    modelValue: {
      type: Boolean,
      "default": true
    },
    url: {
      type: String,
      "default": ""
    },
    params: {
      type: Object,
      "default": () => null
    },
    headers: {
      type: Object,
      "default": () => null
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    },
    noRotate: {
      type: Boolean,
      default: true
    },
    noCircle: {
      type: Boolean,
      default: false
    },
    noSquare: {
      type: Boolean,
      default: false
    },
    maxSize: {
      type: Number,
      "default": 10240
    },
    langType: {
      type: String,
      "default": "zh"
    },
    langExt: {
      type: Object,
      "default": () => null
    },
    imgFormat: {
      type: String,
      "default": "png"
    },
    imgBgc: {
      type: String,
      "default": "#fff"
    },
    withCredentials: {
      type: Boolean,
      "default": false
    },
    method: {
      type: String,
      "default": "POST"
    },
    initialImgUrl: {
      type: String,
      "default": ""
    },
    allowImgFormat: {
      type: Array,
      "default": () => [
        "gif",
        "jpg",
        "png"
      ]
    }
  },
  data() {
    let that = this, {
      imgFormat,
      allowImgFormat,
      langType,
      langExt,
      width,
      height
    } = that, isSupported = true, tempImgFormat = allowImgFormat.indexOf(imgFormat) === -1 ? "jpg" : imgFormat, lang = language[langType] ? language[langType] : language["en"], mime = mimes[tempImgFormat];
    if (langExt) {
      Object.assign(lang, langExt);
    }
    if (typeof FormData != "function") {
      isSupported = false;
    }
    return {
      mime,
      lang,
      isSupported,
      isSupportTouch: document.hasOwnProperty("ontouchstart"),
      step: 1,
      loading: 0,
      progress: 0,
      hasError: false,
      errorMsg: "",
      ratio: width / height,
      sourceImg: null,
      sourceImgUrl: this.initialImgUrl,
      createImgUrl: this.initialImgUrl,
      sourceImgMouseDown: {
        on: false,
        mX: 0,
        mY: 0,
        x: 0,
        y: 0
      },
      previewContainer: {
        width: 100,
        height: 100
      },
      sourceImgContainer: {
        width: 240,
        height: 184
      },
      scale: {
        zoomAddOn: false,
        zoomSubOn: false,
        range: 1,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        maxWidth: 0,
        maxHeight: 0,
        minWidth: 0,
        minHeight: 0,
        naturalWidth: 0,
        naturalHeight: 0
      }
    };
  },
  computed: {
    progressStyle() {
      let {
        progress
      } = this;
      return {
        width: progress + "%"
      };
    },
    sourceImgStyle() {
      let {
        scale,
        sourceImgMasking
      } = this, top = scale.y + sourceImgMasking.y + "px", left = scale.x + sourceImgMasking.x + "px";
      return {
        top,
        left,
        width: scale.width + "px",
        height: scale.height + "px"
      };
    },
    sourceImgMasking() {
      let {
        width,
        height,
        ratio,
        sourceImgContainer
      } = this, sic = sourceImgContainer, sicRatio = sic.width / sic.height, x = 0, y = 0, w = sic.width, h = sic.height, scale = 1;
      if (ratio < sicRatio) {
        scale = sic.height / height;
        w = sic.height * ratio;
        x = (sic.width - w) / 2;
      }
      if (ratio > sicRatio) {
        scale = sic.width / width;
        h = sic.width / ratio;
        y = (sic.height - h) / 2;
      }
      return {
        scale,
        x,
        y,
        width: w,
        height: h
      };
    },
    sourceImgShadeStyle() {
      let {
        sourceImgMasking,
        sourceImgContainer
      } = this, sic = sourceImgContainer, sim = sourceImgMasking, w = sim.width == sic.width ? sim.width : (sic.width - sim.width) / 2, h = sim.height == sic.height ? sim.height : (sic.height - sim.height) / 2;
      return {
        width: w + "px",
        height: h + "px"
      };
    },
    previewStyle() {
      let {
        width,
        height,
        ratio,
        previewContainer
      } = this, pc = previewContainer, w = pc.width, h = pc.height, pcRatio = w / h;
      if (ratio < pcRatio) {
        w = pc.height * ratio;
      }
      if (ratio > pcRatio) {
        h = pc.width / ratio;
      }
      return {
        width: w + "px",
        height: h + "px"
      };
    }
  },
  watch: {
    modelValue(newValue) {
      if (newValue && this.loading != 1) {
        this.reset();
      }
    }
  },
  created() {
    document.addEventListener("keyup", this.handleEscClose);
  },
  beforeUnmount() {
    document.removeEventListener("keyup", this.handleEscClose);
  },
  mounted() {
    if (this.sourceImgUrl) {
      this.startCrop();
    }
  },
  methods: {
    handleEscClose(e) {
      if (this.modelValue && (e.key == "Escape" || e.keyCode == 27)) {
        this.off();
      }
    },
    ripple(e) {
      effectRipple(e);
    },
    off() {
      setTimeout(() => {
        this.$emit("update:modelValue", false);
        if (this.step == 3 && this.loading == 2) {
          this.setStep(1);
        }
      }, 200);
    },
    setStep(no) {
      setTimeout(() => {
        this.step = no;
      }, 200);
    },
    preventDefault(e) {
      e.preventDefault();
      return false;
    },
    handleClick(e) {
      if (this.loading !== 1) {
        if (e.target !== this.$refs.fileinput) {
          e.preventDefault();
          if (document.activeElement !== this.$refs) {
            this.$refs.fileinput.click();
          }
        }
      }
    },
    handleChange(e) {
      e.preventDefault();
      if (this.loading !== 1) {
        let files = e.target.files || e.dataTransfer.files;
        this.reset();
        if (this.checkFile(files[0])) {
          this.setSourceImg(files[0]);
        }
      }
    },
    checkFile(file) {
      let that = this, {
        lang,
        maxSize
      } = that;
      if (file.type.indexOf("image") === -1) {
        that.hasError = true;
        that.errorMsg = lang.error.onlyImg;
        return false;
      }
      if (file.size / 1024 > maxSize) {
        that.hasError = true;
        that.errorMsg = lang.error.outOfSize + maxSize + "kb";
        return false;
      }
      return true;
    },
    reset() {
      let that = this;
      that.loading = 0;
      that.hasError = false;
      that.errorMsg = "";
      that.progress = 0;
    },
    setSourceImg(file) {
      this.$emit("src-file-set", file.name, file.type, file.size);
      let that = this, fr = new FileReader();
      fr.onload = function(e) {
        that.sourceImgUrl = fr.result;
        that.startCrop();
      };
      fr.readAsDataURL(file);
    },
    startCrop() {
      let that = this, {
        width,
        height,
        ratio,
        scale,
        sourceImgUrl,
        sourceImgMasking,
        lang
      } = that, sim = sourceImgMasking, img = new Image();
      img.src = sourceImgUrl;
      img.onload = function() {
        let nWidth = img.naturalWidth, nHeight = img.naturalHeight, nRatio = nWidth / nHeight, w = sim.width, h = sim.height, x = 0, y = 0;
        if (nWidth < width || nHeight < height) {
          that.hasError = true;
          that.errorMsg = lang.error.lowestPx + width + "*" + height;
          return false;
        }
        if (ratio > nRatio) {
          h = w / nRatio;
          y = (sim.height - h) / 2;
        }
        if (ratio < nRatio) {
          w = h * nRatio;
          x = (sim.width - w) / 2;
        }
        scale.range = 0;
        scale.x = x;
        scale.y = y;
        scale.width = w;
        scale.height = h;
        scale.minWidth = w;
        scale.minHeight = h;
        scale.maxWidth = nWidth * sim.scale;
        scale.maxHeight = nHeight * sim.scale;
        scale.naturalWidth = nWidth;
        scale.naturalHeight = nHeight;
        that.sourceImg = img;
        that.createImg();
        that.setStep(2);
      };
    },
    imgStartMove(e) {
      e.preventDefault();
      if (this.isSupportTouch && !e.targetTouches) {
        return false;
      }
      let et = e.targetTouches ? e.targetTouches[0] : e, {
        sourceImgMouseDown,
        scale
      } = this, simd = sourceImgMouseDown;
      simd.mX = et.screenX;
      simd.mY = et.screenY;
      simd.x = scale.x;
      simd.y = scale.y;
      simd.on = true;
    },
    imgMove(e) {
      e.preventDefault();
      if (this.isSupportTouch && !e.targetTouches) {
        return false;
      }
      let et = e.targetTouches ? e.targetTouches[0] : e, {
        sourceImgMouseDown: {
          on,
          mX,
          mY,
          x,
          y
        },
        scale,
        sourceImgMasking
      } = this, sim = sourceImgMasking, nX = et.screenX, nY = et.screenY, dX = nX - mX, dY = nY - mY, rX = x + dX, rY = y + dY;
      if (!on)
        return;
      if (rX > 0) {
        rX = 0;
      }
      if (rY > 0) {
        rY = 0;
      }
      if (rX < sim.width - scale.width) {
        rX = sim.width - scale.width;
      }
      if (rY < sim.height - scale.height) {
        rY = sim.height - scale.height;
      }
      scale.x = rX;
      scale.y = rY;
    },
    rotateImg(e) {
      let {
        sourceImg,
        scale: {
          naturalWidth,
          naturalHeight
        }
      } = this, width = naturalHeight, height = naturalWidth, canvas = this.$refs.canvas, ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.fillRect(0, 0, width, height);
      ctx.translate(width, 0);
      ctx.rotate(Math.PI * 90 / 180);
      ctx.drawImage(sourceImg, 0, 0, naturalWidth, naturalHeight);
      let imgUrl = canvas.toDataURL(mimes["png"]);
      this.sourceImgUrl = imgUrl;
      this.startCrop();
    },
    handleMouseWheel(e) {
      e = e || window.event;
      let { scale } = this;
      if (e.wheelDelta) {
        if (e.wheelDelta > 0) {
          this.zoomImg(scale.range >= 100 ? 100 : ++scale.range);
        }
        if (e.wheelDelta < 0) {
          this.zoomImg(scale.range <= 0 ? 0 : --scale.range);
        }
      } else if (e.detail) {
        if (e.detail > 0) {
          this.zoomImg(scale.range >= 100 ? 100 : ++scale.range);
        }
        if (e.detail < 0) {
          this.zoomImg(scale.range <= 0 ? 0 : --scale.range);
        }
      }
    },
    startZoomAdd(e) {
      let that = this, {
        scale
      } = that;
      scale.zoomAddOn = true;
      function zoom() {
        if (scale.zoomAddOn) {
          let range = scale.range >= 100 ? 100 : ++scale.range;
          that.zoomImg(range);
          setTimeout(function() {
            zoom();
          }, 60);
        }
      }
      zoom();
    },
    endZoomAdd(e) {
      this.scale.zoomAddOn = false;
    },
    startZoomSub(e) {
      let that = this, {
        scale
      } = that;
      scale.zoomSubOn = true;
      function zoom() {
        if (scale.zoomSubOn) {
          let range = scale.range <= 0 ? 0 : --scale.range;
          that.zoomImg(range);
          setTimeout(function() {
            zoom();
          }, 60);
        }
      }
      zoom();
    },
    endZoomSub(e) {
      let {
        scale
      } = this;
      scale.zoomSubOn = false;
    },
    zoomChange(e) {
      this.zoomImg(e.target.value);
    },
    zoomImg(newRange) {
      let that = this, {
        sourceImgMasking,
        sourceImgMouseDown,
        scale
      } = this, {
        maxWidth,
        maxHeight,
        minWidth,
        minHeight,
        width,
        height,
        x,
        y,
        range
      } = scale, sim = sourceImgMasking, sWidth = sim.width, sHeight = sim.height, nWidth = minWidth + (maxWidth - minWidth) * newRange / 100, nHeight = minHeight + (maxHeight - minHeight) * newRange / 100, nX = sWidth / 2 - nWidth / width * (sWidth / 2 - x), nY = sHeight / 2 - nHeight / height * (sHeight / 2 - y);
      if (nX > 0) {
        nX = 0;
      }
      if (nY > 0) {
        nY = 0;
      }
      if (nX < sWidth - nWidth) {
        nX = sWidth - nWidth;
      }
      if (nY < sHeight - nHeight) {
        nY = sHeight - nHeight;
      }
      scale.x = nX;
      scale.y = nY;
      scale.width = nWidth;
      scale.height = nHeight;
      scale.range = newRange;
      setTimeout(function() {
        if (scale.range == newRange) {
          that.createImg();
        }
      }, 300);
    },
    createImg(e) {
      let that = this, {
        imgFormat,
        imgBgc,
        mime,
        sourceImg,
        scale: {
          x,
          y,
          width,
          height
        },
        sourceImgMasking: {
          scale
        }
      } = that, canvas = that.$refs.canvas, ctx = canvas.getContext("2d");
      if (e) {
        that.sourceImgMouseDown.on = false;
      }
      canvas.width = that.width;
      canvas.height = that.height;
      ctx.clearRect(0, 0, that.width, that.height);
      if (imgFormat == "png") {
        ctx.fillStyle = "rgba(0,0,0,0)";
      } else {
        ctx.fillStyle = imgBgc;
      }
      ctx.fillRect(0, 0, that.width, that.height);
      ctx.drawImage(sourceImg, x / scale, y / scale, width / scale, height / scale);
      that.createImgUrl = canvas.toDataURL(mime);
    },
    prepareUpload() {
      let {
        url,
        createImgUrl,
        field,
        ki
      } = this;
      this.$emit("crop-success", createImgUrl, field, ki);
      if (typeof url == "string" && url) {
        this.upload();
      } else {
        this.off();
      }
    },
    upload() {
      let that = this, {
        lang,
        imgFormat,
        mime,
        url,
        params,
        headers,
        field,
        ki,
        createImgUrl,
        withCredentials,
        method
      } = this, fmData = new FormData();
      if (typeof params == "object" && params) {
        Object.keys(params).forEach((k) => {
          fmData.append(k, params[k]);
        });
      }
      fmData.append(field, data2blob(createImgUrl, mime), field + "." + imgFormat);
      const uploadProgress = function(event) {
        if (event.lengthComputable) {
          that.progress = 100 * Math.round(event.loaded) / event.total;
        }
      };
      that.reset();
      that.loading = 1;
      that.setStep(3);
      new Promise(function(resolve, reject) {
        let client = new XMLHttpRequest();
        client.open(method, url, true);
        client.withCredentials = withCredentials;
        client.onreadystatechange = function() {
          if (this.readyState !== 4) {
            return;
          }
          if (this.status === 200 || this.status === 201 || this.staus === 202) {
            resolve(JSON.parse(this.responseText));
          } else {
            reject(this.status);
          }
        };
        client.upload.addEventListener("progress", uploadProgress, false);
        if (typeof headers == "object" && headers) {
          Object.keys(headers).forEach((k) => {
            client.setRequestHeader(k, headers[k]);
          });
        }
        client.send(fmData);
      }).then(
        function(resData) {
          if (that.modelValue) {
            that.loading = 2;
            that.$emit("crop-upload-success", resData, field, ki);
          }
        },
        function(sts) {
          if (that.modelValue) {
            that.loading = 3;
            that.hasError = true;
            that.errorMsg = lang.fail;
            that.$emit("crop-upload-fail", sts, field, ki);
          }
        }
      );
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "vue-image-crop-upload",
    style: $props.modelValue ? null : { display: "none" }
  }, _attrs))}><div class="vicp-wrap"><div class="vicp-close"><i class="vicp-icon4"></i></div><div class="vicp-step1" style="${ssrRenderStyle($data.step == 1 ? null : { display: "none" })}"><div class="vicp-drop-area"><i class="vicp-icon1" style="${ssrRenderStyle($data.loading != 1 ? null : { display: "none" })}"><i class="vicp-icon1-arrow"></i><i class="vicp-icon1-body"></i><i class="vicp-icon1-bottom"></i></i><span class="vicp-hint" style="${ssrRenderStyle($data.loading !== 1 ? null : { display: "none" })}">${ssrInterpolate($data.lang.hint)}</span><span class="vicp-no-supported-hint" style="${ssrRenderStyle(!$data.isSupported ? null : { display: "none" })}">${ssrInterpolate($data.lang.noSupported)}</span>`);
  if ($data.step == 1) {
    _push(`<input type="file" accept="image/*" style="${ssrRenderStyle({ display: "none" })}">`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="vicp-error" style="${ssrRenderStyle($data.hasError ? null : { display: "none" })}"><i class="vicp-icon2"></i> ${ssrInterpolate($data.errorMsg)}</div><div class="vicp-operate"><a>${ssrInterpolate($data.lang.btn.off)}</a></div></div>`);
  if ($data.step == 2) {
    _push(`<div class="vicp-step2"><div class="vicp-crop"><div class="vicp-crop-left" style="${ssrRenderStyle(null)}"><div class="vicp-img-container"><img${ssrRenderAttr("src", $data.sourceImgUrl)} style="${ssrRenderStyle($options.sourceImgStyle)}" class="vicp-img" draggable="false"><div class="vicp-img-shade vicp-img-shade-1" style="${ssrRenderStyle($options.sourceImgShadeStyle)}"></div><div class="vicp-img-shade vicp-img-shade-2" style="${ssrRenderStyle($options.sourceImgShadeStyle)}"></div></div><div class="vicp-range"><input type="range"${ssrRenderAttr("value", $data.scale.range)} step="1" min="0" max="100"><i class="vicp-icon5"></i><i class="vicp-icon6"></i></div>`);
    if (!$props.noRotate) {
      _push(`<div class="vicp-rotate"><i>\u21BB</i></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="vicp-crop-right" style="${ssrRenderStyle(null)}"><div class="vicp-preview">`);
    if (!$props.noSquare) {
      _push(`<div class="vicp-preview-item"><img${ssrRenderAttr("src", $data.createImgUrl)} style="${ssrRenderStyle($options.previewStyle)}"><span>${ssrInterpolate($data.lang.preview)}</span></div>`);
    } else {
      _push(`<!---->`);
    }
    if (!$props.noCircle) {
      _push(`<div class="vicp-preview-item vicp-preview-item-circle"><img${ssrRenderAttr("src", $data.createImgUrl)} style="${ssrRenderStyle($options.previewStyle)}"><span>${ssrInterpolate($data.lang.preview)}</span></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div><div class="vicp-operate"><a>${ssrInterpolate($data.lang.btn.back)}</a><a class="vicp-operate-btn">${ssrInterpolate($data.lang.btn.save)}</a></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.step == 3) {
    _push(`<div class="vicp-step3"><div class="vicp-upload"><span class="vicp-loading" style="${ssrRenderStyle($data.loading === 1 ? null : { display: "none" })}">${ssrInterpolate($data.lang.loading)}</span><div class="vicp-progress-wrap"><span class="vicp-progress" style="${ssrRenderStyle([
      $data.loading === 1 ? null : { display: "none" },
      $options.progressStyle
    ])}"></span></div><div class="vicp-error" style="${ssrRenderStyle($data.hasError ? null : { display: "none" })}"><i class="vicp-icon2"></i> ${ssrInterpolate($data.errorMsg)}</div><div class="vicp-success" style="${ssrRenderStyle($data.loading === 2 ? null : { display: "none" })}"><i class="vicp-icon3"></i> ${ssrInterpolate($data.lang.success)}</div></div><div class="vicp-operate"><a>${ssrInterpolate($data.lang.btn.back)}</a><a>${ssrInterpolate($data.lang.btn.close)}</a></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<canvas style="${ssrRenderStyle({ display: "none" })}"${ssrRenderAttr("width", $props.width)}${ssrRenderAttr("height", $props.height)}></canvas></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-image-crop-upload/upload-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Cropper = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Cropper as C
};
