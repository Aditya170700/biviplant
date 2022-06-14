$(function () {
  "use strict";

  $(document).ready(function () {
    $("#example").DataTable();
  });

  $(document).ready(function () {
    var table = $(".e").DataTable({
      lengthChange: false,
      buttons: ["copy", "excel", "pdf", "print"],
    });

    table.buttons().container().appendTo("#e_wrapper .col-md-6:eq(0)");
  });
});
