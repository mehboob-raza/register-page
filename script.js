 $("#mobile-number").intlTelInput({
  initialCountry: "auto",
  geoIpLookup: function(callback) {
    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
      var countryCode = (resp && resp.country) ? resp.country : "";
      callback(countryCode);
      init();
    });
  },
//   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js" // just for formatting/placeholders etc
});
function init() {
    $(".selected-flag").css("width", "150px");
    $(".selected-flag").append($("<div id='country-name'>"+name+"</div>").css({
        "position": "absolute",
        "top": "0",
        "bottom": "0",
        "right": "0",
        "width": "100",
        "display": "flex",
        "align-items": "center",
        "overflow": "hidden",
        "white-space": "nowrap"
    }));
    $("#mobile-number").css({"padding-left":"150px", "width":"300px"});
    showCountryAndCode();
};
$(".country-list li").click(function() {
    showCountryAndCode();
});
function showCountryAndCode() {
    setTimeout(() => {
        let name = $("li.active span.country-name").text();
        name = name.indexOf('(') > 0 ? name.substr(0, name.indexOf('(') - 1) : name;
        const code = $("li.active span.dial-code").text();
        $("#country-name").text(name);
        $("#mobile-number").val(name);
    }, 0);
}



// selct language

// JavaScript for language picker functionality
document.addEventListener('DOMContentLoaded', function () {
    var languagePickerSelect = document.getElementById('language-picker-select');

    languagePickerSelect.addEventListener('change', function () {
        var selectedLanguage = languagePickerSelect.value;
        // You can add logic here to handle language change, e.g., update content based on the selected language
        console.log('Selected language:', selectedLanguage);
    });
});
