var tgLink = window.ADSMAX_CONFIG && window.ADSMAX_CONFIG.tgLink ? window.ADSMAX_CONFIG.tgLink : "https://t.me/adsmax_LBJ";

document.querySelectorAll(".js-contact-btn").forEach(function(btn){
  btn.setAttribute("href", tgLink);
  btn.addEventListener("click", function(){
    if (typeof fbq === "function") {
      fbq("track", "Lead", {
        content_name: "Telegram Contact",
        content_category: "Contact",
        destination: tgLink,
        source: "ADSMAX Landing Page"
      });
    }
  });
});
