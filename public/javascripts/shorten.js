$(".btn-shorten").on("click", function() {
  $.ajax({
    url: "/api/shorten",
    type: "POST",
    dataType: "JSON",
    data: { url: $("#url-field").val() },
    success: function(data) {
      var resultHTML =
        '<a  class="result" href="' +
        data.shortUrl +
        '"  target="_blank">' +
        data.shortUrl +
        "</a>";
      $("#link").html(resultHTML);
      $("#link")
        .hide()
        .fadeIn("slow");
    }
  });
});
