// nav.js — header & footer mutualisés via Web Components natifs.
// Zéro dépendance, zéro réseau : fonctionne par double-clic (file://).
// Source unique de la barre de navigation, du compteur J-day et du pied de page.
(function () {
  "use strict";

  // Valeur de référence unique (cf. règle de cohérence CLAUDE.md) :
  // à mettre à jour ici lors d'un nouveau jalon — propagée à la nav ET au footer.
  var ASOF = "12 juillet 2026 (J135)";

  // Ordre de la navigation = source unique. Modifier ici se répercute sur toutes les pages.
  var LINKS = [
    { key: "accueil",        href: "index.html",                            label: "Accueil" },
    { key: "chronologie",    href: "chronologie.html",                      label: "Chronologie" },
    { key: "pertes",         href: "pertes.html",                           label: "Pertes" },
    { key: "carte-ormuz",    href: "carte_infrastructures.html",            label: "Carte zone Ormuz" },
    { key: "carte-europe",   href: "carte_infrastructures_europe.html",     label: "Carte Europe" },
    { key: "dependances-ue", href: "dependances_ormuz_pays.html",           label: "Dépendances UE (énergie)" },
    { key: "ressources",     href: "dependances_ressources_critiques.html", label: "Ressources critiques" },
    { key: "impacts-agri",   href: "impacts_agricoles.html",                label: "Impacts agricoles" },
    { key: "stocks",         href: "stocks_pays_ue.html",                   label: "Stocks UE" }
  ];

  // Le footer est identique partout, sauf la phrase centrale de la chronologie.
  var FOOTER_NOTES = {
    "default": "Suivi OSINT d'une crise réelle et en cours : les chiffres (prix, stocks, flux) périment vite, à revérifier au-delà de ~48-72 h. La synthèse périodique la plus récente fait foi.",
    "chronologie": "Suivi OSINT d'une crise réelle et en cours : les dates et chiffres périment vite et certains J-day restent flottants (cf. cadrage en haut de page). La synthèse périodique la plus récente fait foi."
  };

  // <site-nav active="chronologie"></site-nav>
  class SiteNav extends HTMLElement {
    connectedCallback() {
      var active = this.getAttribute("active");
      var links = LINKS.map(function (link) {
        var cls = link.key === active ? ' class="active"' : "";
        return '  <a href="' + link.href + '"' + cls + ">" + link.label + "</a>";
      }).join("\n");
      this.innerHTML =
        '<nav class="topbar">\n' +
        '  <div class="brand">Crise du détroit d\'Ormuz<span class="crisis"> — ' + ASOF + "</span></div>\n" +
        links + "\n" +
        "</nav>";
    }
  }

  // <site-footer></site-footer> ou <site-footer variant="chronologie"></site-footer>
  class SiteFooter extends HTMLElement {
    connectedCallback() {
      var variant = this.getAttribute("variant") || "default";
      var note = FOOTER_NOTES[variant] || FOOTER_NOTES["default"];
      this.innerHTML =
        '<footer class="asof-note">\n' +
        "  <strong>Instantané au " + ASOF + " — situation évolutive.</strong>\n" +
        "  " + note + "\n" +
        '  Analyse sur sources ouvertes — ni conseil financier, ni source de sécurité opérationnelle. · <a href="../README.md">À propos &amp; méthodologie</a>\n' +
        "</footer>";
    }
  }

  customElements.define("site-nav", SiteNav);
  customElements.define("site-footer", SiteFooter);
})();
