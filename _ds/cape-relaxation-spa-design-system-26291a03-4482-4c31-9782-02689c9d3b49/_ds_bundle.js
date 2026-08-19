/* @ds-bundle: {"format":4,"namespace":"CapeRelaxationSpaDesignSystem_26291a","components":[{"name":"ImageFrame","sourcePath":"components/cards/ImageFrame.jsx"},{"name":"InfoCard","sourcePath":"components/cards/InfoCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"GoldRule","sourcePath":"components/core/GoldRule.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"OrnamentIcon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"NavLink","sourcePath":"components/core/NavLink.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/cards/ImageFrame.jsx":"8fa8cf5c5c0c","components/cards/InfoCard.jsx":"1b3bf00950ba","components/cards/ServiceCard.jsx":"ee8d1bcfd00d","components/core/Badge.jsx":"79c3f777bc5a","components/core/Button.jsx":"85137e170b73","components/core/Eyebrow.jsx":"cfab8f8a62d9","components/core/GoldRule.jsx":"609c69cc317e","components/core/Icon.jsx":"18fbf419b006","components/core/IconButton.jsx":"1dea7bee4cef","components/core/NavLink.jsx":"16760a490de3","components/core/SectionHeading.jsx":"5dbd042b325e","components/forms/Checkbox.jsx":"7adc5366ddca","components/forms/Input.jsx":"a8e4817de236","components/forms/Select.jsx":"dc7d590ac18b","components/forms/Switch.jsx":"1926bcf3d1a3","ui_kits/website/About.jsx":"1ef39cd1abc8","ui_kits/website/Booking.jsx":"ef8493907669","ui_kits/website/Chrome.jsx":"101e95b925db","ui_kits/website/Home.jsx":"59d40e0b1ef4","ui_kits/website/Services.jsx":"8bd5a8ab810f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CapeRelaxationSpaDesignSystem_26291a = window.CapeRelaxationSpaDesignSystem_26291a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ImageFrame.jsx
try { (() => {
/* Photography placeholder. No licensed spa imagery was supplied with the brand spec —
   drop a real image in via the src prop; the warm overlay + vignette treatment stays. */
function ImageFrame({
  src,
  ratio = '4/5',
  label = 'Spa photography',
  overlay = true,
  radius = 'var(--radius-md)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      borderRadius: radius,
      overflow: 'hidden',
      background: src ? 'var(--color-bg-deep)' : 'linear-gradient(160deg,#2b2724 0%,#1b1917 60%,#141312 100%)',
      border: '1px solid var(--color-border-hairline)',
      ...style
    }
  }, src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.85) contrast(1.08)'
    }
  }), overlay && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-vignette)',
      pointerEvents: 'none'
    }
  }), !src && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeContent: 'center',
      gap: 8,
      justifyItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: '9px',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'rgba(215,169,94,.55)',
      textAlign: 'center',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: 'rgba(215,169,94,.5)'
    }
  }), label));
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  variant = 'gold'
}) {
  const v = {
    gold: {
      background: 'transparent',
      color: 'var(--color-gold)',
      border: '1px solid var(--color-border-dark)'
    },
    solid: {
      background: 'var(--color-gold)',
      color: 'var(--text-on-gold)',
      border: '1px solid var(--color-gold)'
    },
    cream: {
      background: 'rgba(40,37,31,.06)',
      color: 'var(--color-dark-text)',
      border: '1px solid var(--color-border-light)'
    },
    price: {
      background: 'transparent',
      color: 'var(--color-gold-soft)',
      border: 'none',
      padding: 0,
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--font-md)',
      letterSpacing: 0,
      textTransform: 'none'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      borderRadius: 'var(--radius-pill)',
      padding: '5px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: '9px',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase',
      ...v
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-body)',
  fontWeight: 'var(--weight-semibold)',
  letterSpacing: 'var(--tracking-button)',
  textTransform: 'uppercase',
  borderRadius: 'var(--radius-button)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  lineHeight: 1,
  transition: 'background var(--transition-normal), color var(--transition-normal), border-color var(--transition-normal)',
  textDecoration: 'none',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    fontSize: '9px',
    padding: '9px 18px'
  },
  md: {
    fontSize: 'var(--font-xs)',
    padding: '12px 25px'
  },
  lg: {
    fontSize: 'var(--font-sm)',
    padding: '15px 34px'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled,
  hovered,
  children,
  style,
  ...rest
}) {
  const [hov, setHov] = React.useState(false);
  const isHov = hovered !== undefined ? hovered : hov;
  const v = {
    primary: isHov ? {
      background: 'transparent',
      color: 'var(--color-gold)',
      border: '1px solid var(--color-gold)'
    } : {
      background: 'var(--color-gold)',
      color: 'var(--text-on-gold)',
      border: '1px solid var(--color-gold)'
    },
    secondary: isHov ? {
      background: 'var(--color-gold)',
      color: 'var(--text-on-gold)',
      border: '1px solid var(--color-gold)'
    } : {
      background: 'transparent',
      color: 'var(--color-gold)',
      border: '1px solid var(--color-gold)'
    },
    ghost: {
      background: 'transparent',
      color: isHov ? 'var(--color-gold)' : 'var(--color-text)',
      border: '1px solid transparent',
      padding: '10px 0'
    },
    onLight: isHov ? {
      background: 'transparent',
      color: 'var(--color-gold-dark)',
      border: '1px solid var(--color-gold-dark)'
    } : {
      background: 'var(--ink-dark)',
      color: 'var(--cream)',
      border: '1px solid var(--ink-dark)'
    }
  }[variant];
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: disabled,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      ...base,
      ...sizes[size],
      ...v,
      opacity: disabled ? 0.4 : 1,
      pointerEvents: disabled ? 'none' : 'auto',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = 'gold',
  rule = false,
  align = 'left',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: 'var(--color-gold)',
      opacity: .85
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--font-xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: tone === 'gold' ? 'var(--color-gold)' : tone === 'dark' ? 'rgba(40,37,31,.6)' : 'var(--color-text-muted)'
    }
  }, children), rule && align === 'center' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: 'var(--color-gold)',
      opacity: .85
    }
  }));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/GoldRule.jsx
try { (() => {
function GoldRule({
  variant = 'line',
  width = '100%',
  opacity = 0.85,
  style
}) {
  if (variant === 'dot') return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'var(--color-gold)',
      display: 'inline-block',
      opacity,
      ...style
    }
  });
  if (variant === 'dotted') return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center',
      ...style
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 3,
      height: 3,
      borderRadius: '50%',
      background: 'var(--color-gold)',
      opacity: i === 1 ? 1 : .5
    }
  })));
  if (variant === 'curve') return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1200 80",
    width: width,
    height: "80",
    preserveAspectRatio: "none",
    style: {
      display: 'block',
      overflow: 'visible',
      ...style
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 68 C 300 68, 380 8, 600 8 S 900 68, 1200 12",
    fill: "none",
    stroke: "var(--color-gold)",
    strokeWidth: "1",
    opacity: opacity
  }));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width,
      height: 1,
      background: 'var(--color-gold)',
      opacity,
      ...style
    }
  });
}
Object.assign(__ds_scope, { GoldRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GoldRule.jsx", error: String((e && e.message) || e) }); }

// components/cards/InfoCard.jsx
try { (() => {
function InfoCard({
  title,
  description,
  items = [],
  footer,
  tone = 'cream'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: tone === 'ivory' ? 'var(--surface-card-highlight)' : 'var(--surface-card-light)',
      color: 'var(--color-dark-text)',
      borderRadius: 'var(--radius-md)',
      padding: '30px',
      border: '1px solid var(--color-border-white)',
      boxShadow: 'var(--shadow-card)',
      display: 'grid',
      gap: 'var(--space-md)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--size-card-title)',
      fontWeight: 'var(--weight-medium)',
      textAlign: 'center',
      lineHeight: 1.1,
      textTransform: 'uppercase',
      letterSpacing: '.02em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.GoldRule, {
    variant: "dotted"
  })), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--font-sm)',
      lineHeight: 'var(--leading-body)',
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-body-light-bg)',
      textAlign: 'center'
    }
  }, description), items.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'grid',
      gap: 'var(--space-xs)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--font-sm)',
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-body-light-bg)',
      borderTop: i === 0 ? 'none' : '1px solid var(--color-border-light)',
      paddingTop: i === 0 ? 0 : 'var(--space-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 3,
      borderRadius: '50%',
      background: 'var(--color-gold-dark)',
      flex: 'none'
    }
  }), it))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-xs)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, footer));
}
Object.assign(__ds_scope, { InfoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/InfoCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Ornamental line icons come from Lucide (lucide-static via CDN), recoloured with a CSS mask
   so every glyph inherits the champagne-gold accent. Stroke-only, no fills, no colour. */
const CDN = 'https://unpkg.com/lucide-static@0.414.0/icons/';
function Icon({
  name = 'flower',
  size = 18,
  color = 'var(--color-gold)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": name,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      background: color,
      WebkitMaskImage: 'url(' + CDN + name + '.svg)',
      maskImage: 'url(' + CDN + name + '.svg)',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      flex: 'none',
      ...style
    }
  }, rest));
}
function OrnamentIcon({
  name = 'flower',
  size = 40
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--color-border-dark)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: name,
    size: Math.round(size * 0.42)
  }));
}
Object.assign(__ds_scope, { Icon, OrnamentIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
function ServiceCard({
  icon = 'flower',
  title,
  description,
  price,
  align = 'left'
}) {
  const [hov, setHov] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      background: 'var(--surface-service)',
      border: '1px solid ' + (hov ? 'var(--color-border-dark)' : 'var(--color-border-hairline)'),
      borderRadius: 'var(--radius-sm)',
      padding: '22px',
      display: 'grid',
      gap: 'var(--space-sm)',
      justifyItems: align === 'center' ? 'center' : 'start',
      textAlign: align,
      transition: 'border-color var(--transition-normal), transform var(--transition-normal)',
      transform: hov ? 'translateY(-2px)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.OrnamentIcon, {
    name: icon,
    size: 38
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--font-lg)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--color-text)',
      textTransform: 'uppercase',
      letterSpacing: '.03em'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--font-sm)',
      lineHeight: 'var(--leading-body)',
      fontWeight: 'var(--weight-light)',
      color: 'var(--color-text-muted)'
    }
  }, description), price && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 'var(--space-xs)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.GoldRule, {
    variant: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--font-md)',
      color: 'var(--color-gold-soft)'
    }
  }, price)));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  name,
  label,
  size = 34,
  variant = 'outline',
  ...rest
}) {
  const [hov, setHov] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      background: variant === 'solid' ? hov ? 'transparent' : 'var(--color-gold)' : 'transparent',
      border: '1px solid ' + (variant === 'bare' ? 'transparent' : 'var(--color-border-dark)'),
      borderColor: hov && variant !== 'bare' ? 'var(--color-gold)' : undefined,
      transition: 'all var(--transition-normal)'
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(size * 0.45),
    color: variant === 'solid' && !hov ? 'var(--text-on-gold)' : 'var(--color-gold)'
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/NavLink.jsx
try { (() => {
function NavLink({
  children,
  href = '#',
  active = false,
  tone = 'light',
  onClick
}) {
  const [hov, setHov] = React.useState(false);
  const base = tone === 'dark' ? 'rgba(40,37,31,.72)' : 'rgba(255,255,255,.88)';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--font-xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: active || hov ? 'var(--color-gold)' : base,
      paddingBottom: 3,
      borderBottom: '1px solid ' + (active ? 'var(--color-gold)' : 'transparent'),
      transition: 'color var(--transition-fast), border-color var(--transition-fast)'
    }
  }, children);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'center',
  tone = 'light',
  level = 'section'
}) {
  const isHero = level === 'hero';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)',
      textAlign: align,
      justifyItems: align === 'center' ? 'center' : 'start',
      maxWidth: align === 'center' ? 'var(--content-narrow)' : 'none',
      marginInline: align === 'center' ? 'auto' : 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    align: align,
    rule: align === 'center'
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontSize: isHero ? 'var(--size-hero)' : 'var(--size-section-title)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: isHero ? 'var(--leading-hero)' : 'var(--leading-title)',
      letterSpacing: 'var(--tracking-hero)',
      textTransform: 'uppercase',
      color: tone === 'dark' ? 'var(--color-dark-text)' : 'var(--color-text)'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--font-sm)',
      lineHeight: 'var(--leading-body)',
      fontWeight: 'var(--weight-light)',
      color: tone === 'dark' ? 'var(--text-body-light-bg)' : 'var(--color-text-muted)',
      maxWidth: '52ch'
    }
  }, body));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  tone = 'dark'
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 16,
      height: 16,
      borderRadius: 'var(--radius-sm)',
      flex: 'none',
      border: '1px solid ' + (checked ? 'var(--color-gold)' : tone === 'light' ? 'var(--color-border-light)' : 'var(--color-border-dark)'),
      background: checked ? 'var(--color-gold)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--transition-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 10,
    color: "var(--text-on-gold)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--font-sm)',
      fontWeight: 'var(--weight-light)',
      color: tone === 'light' ? 'var(--text-body-light-bg)' : 'var(--color-text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  placeholder,
  type = 'text',
  tone = 'dark',
  multiline = false,
  value,
  onChange,
  ...rest
}) {
  const onCream = tone === 'light';
  const field = {
    width: '100%',
    boxSizing: 'border-box',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid ' + (onCream ? 'var(--color-border-light)' : 'var(--color-border-dark)'),
    padding: '10px 0',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--font-body-size)',
    fontWeight: 'var(--weight-light)',
    color: onCream ? 'var(--color-dark-text)' : 'var(--color-text)',
    outline: 'none',
    borderRadius: 0,
    transition: 'border-color var(--transition-fast)',
    resize: 'vertical'
  };
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: 'var(--space-xs)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--font-xs)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: onCream ? 'rgba(40,37,31,.55)' : 'var(--color-text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    type: multiline ? undefined : type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    rows: multiline ? 3 : undefined,
    style: field
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  value,
  onChange,
  tone = 'dark',
  ...rest
}) {
  const onCream = tone === 'light';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: 'var(--space-xs)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--font-xs)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: onCream ? 'rgba(40,37,31,.55)' : 'var(--color-text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      background: 'transparent',
      border: 'none',
      borderBottom: '1px solid ' + (onCream ? 'var(--color-border-light)' : 'var(--color-border-dark)'),
      padding: '10px 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--font-body-size)',
      fontWeight: 'var(--weight-light)',
      color: onCream ? 'var(--color-dark-text)' : 'var(--color-text)',
      outline: 'none',
      borderRadius: 0,
      cursor: 'pointer'
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o,
    style: {
      color: '#28251F'
    }
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  tone = 'dark'
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 34,
      height: 16,
      borderRadius: 'var(--radius-pill)',
      flex: 'none',
      position: 'relative',
      border: '1px solid ' + (checked ? 'var(--color-gold)' : 'var(--color-border-dark)'),
      background: checked ? 'rgba(215,169,94,.22)' : 'transparent',
      transition: 'all var(--transition-normal)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 19 : 2,
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: checked ? 'var(--color-gold)' : 'var(--color-text-muted)',
      transition: 'all var(--transition-normal)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--font-sm)',
      fontWeight: 'var(--weight-light)',
      color: tone === 'light' ? 'var(--text-body-light-bg)' : 'var(--color-text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
const {
  SectionHeading,
  ImageFrame,
  Eyebrow,
  GoldRule,
  Button,
  InfoCard,
  Input,
  Select
} = window.CapeRelaxationSpaDesignSystem_26291a;
function About({
  onBook
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "About",
    title: "A Private Spa",
    body: "Six rooms above the harbour, open by appointment since 2011."
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-2xl)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Our Story"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontSize: 26,
      lineHeight: 1.35,
      fontWeight: 300,
      color: 'var(--ivory)'
    }
  }, "We opened with two rooms and one rule: never more than one guest at a time in the corridor."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--font-sm)',
      lineHeight: 1.8,
      fontWeight: 300,
      color: 'var(--color-text-muted)'
    }
  }, "Fifteen years later the rule stands. Treatments are booked with buffer time on either side, therapists work with organic oils blended in-house, and the lounge is never shared with more than three guests."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onBook
  }, "Book a visit"))), /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "4/5",
    label: "Therapist portrait \xB7 1:1"
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "deep"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The Team",
    title: "Our Therapists"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-md)',
      marginTop: 'var(--space-xl)'
    }
  }, [['Mara', 'Deep tissue · 12 yrs'], ['Iyla', 'Facials · 9 yrs'], ['Noor', 'Aromatherapy · 7 yrs'], ['Sena', 'Prenatal · 11 yrs']].map(([n, r]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "1/1",
    label: n
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--font-lg)',
      textTransform: 'uppercase',
      letterSpacing: '.03em'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-muted)',
      fontWeight: 300
    }
  }, r))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Visit",
    title: "Find Us",
    body: "18 Bree Street, Cape Town \xB7 Tuesday to Sunday, 09:00 \u2013 20:00"
  }), /*#__PURE__*/React.createElement(GoldRule, {
    width: "80px"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--font-sm)',
      lineHeight: 1.9,
      fontWeight: 300,
      color: 'var(--color-text-muted)'
    }
  }, "+27 21 000 0000", /*#__PURE__*/React.createElement("br", null), "hello@caperelaxation.co.za")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Jane Adler"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "jane@example.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Enquiry",
    options: ['General', 'Gift vouchers', 'Group bookings', 'Press']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    placeholder: "How can we help?",
    multiline: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Send enquiry"))))));
}
function Packages({
  onBook
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Packages",
    title: "Retreat Days",
    body: "Longer visits, arranged as one uninterrupted stretch of time."
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(InfoCard, {
    title: "Half Day",
    description: "Three hours, two treatments and lunch in the lounge.",
    items: ['Massage · 90 min', 'Facial · 60 min', 'Lunch'],
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "onLight",
      size: "sm",
      onClick: onBook
    }, "$260 \xB7 Book")
  }), /*#__PURE__*/React.createElement(InfoCard, {
    title: "Full Day",
    description: "Six hours with four treatments and a long, slow break.",
    items: ['Four treatments', 'Lunch', 'Lounge all day'],
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "onLight",
      size: "sm",
      onClick: onBook
    }, "$480 \xB7 Book")
  }), /*#__PURE__*/React.createElement(InfoCard, {
    tone: "ivory",
    title: "Couples",
    description: "A shared room, two therapists and sparkling afterwards.",
    items: ['Shared room', 'Two therapists', 'Sparkling'],
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "onLight",
      size: "sm",
      onClick: onBook
    }, "$540 \xB7 Book")
  }))));
}
Object.assign(window, {
  About,
  Packages
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Booking.jsx
try { (() => {
const {
  Input,
  Select,
  Checkbox,
  Switch,
  Button,
  Eyebrow,
  GoldRule,
  Badge,
  SectionHeading,
  OrnamentIcon
} = window.CapeRelaxationSpaDesignSystem_26291a;
function Booking({
  onDone
}) {
  const [sent, setSent] = React.useState(false);
  const [treatment, setTreatment] = React.useState('Signature Ritual');
  const [stones, setStones] = React.useState(false);
  const [silent, setSilent] = React.useState(true);
  if (sent) return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg-deep)',
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      padding: '120px 5%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)',
      justifyItems: 'center',
      textAlign: 'center',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(OrnamentIcon, {
    name: "check",
    size: 46
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--size-section-title)',
      fontWeight: 400,
      textTransform: 'uppercase',
      lineHeight: 1
    }
  }, "Reserved"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--font-sm)',
      lineHeight: 1.8,
      fontWeight: 300,
      color: 'var(--color-text-muted)'
    }
  }, treatment, " is held for you. We will confirm by email within the hour."), /*#__PURE__*/React.createElement(GoldRule, {
    width: "60px"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onDone
  }, "Back to home")));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--color-bg-deep)',
      padding: '140px 5% 60px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(160deg,#26221f,#151514)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 'min(100%, var(--container-width))',
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Reservations",
    title: "Book Your Visit",
    body: "Appointments are confirmed by hand, usually within the hour."
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--space-2xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jane Adler"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "jane@example.com",
    type: "email"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "+27 21 000 0000"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Treatment",
    value: treatment,
    onChange: e => setTreatment(e.target.value),
    options: ['Signature Ritual', 'Deep Tissue', 'Radiance Facial', 'Hot Stone', 'Half Day Package']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Date",
    options: ['Fri 21 Aug', 'Sat 22 Aug', 'Sun 23 Aug', 'Mon 24 Aug']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Time",
    options: ['09:00', '11:30', '14:00', '16:30', '18:00']
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Notes for your therapist",
    placeholder: "Pressure, allergies, preferences",
    multiline: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xl)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Add hot stones \xB7 $25",
    checked: stones,
    onChange: setStones
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Silent treatment",
    checked: silent,
    onChange: setSilent
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setSent(true)
  }, "Confirm reservation"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--cream)',
      color: 'var(--color-dark-text)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      padding: 30,
      display: 'grid',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Your visit"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--size-card-title)',
      textTransform: 'uppercase',
      letterSpacing: '.02em'
    }
  }, treatment), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--color-border-light)'
    }
  }), [['Duration', '90 min'], ['Therapist', 'No preference'], ['Hot stones', stones ? 'Added' : '—'], ['Silence', silent ? 'Requested' : '—']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--font-sm)',
      fontWeight: 300,
      color: 'var(--text-body-light-bg)'
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-dark-text)'
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--color-border-light)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'rgba(40,37,31,.55)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 26
    }
  }, "$", 180 + (stones ? 25 : 0)))))));
}
Object.assign(window, {
  Booking
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  NavLink,
  Button,
  Icon,
  IconButton,
  GoldRule
} = window.CapeRelaxationSpaDesignSystem_26291a;
const NAV = ['Home', 'About', 'Services', 'Packages', 'Contact'];
function Wordmark({
  size = 15
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flower",
    size: size + 3,
    color: "var(--color-gold)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: size,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--ivory)'
    }
  }, "Cape Relaxation"));
}
function SiteHeader({
  page,
  onNav,
  onBook
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 10,
      background: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(100% - 40px, var(--container-width))',
      marginInline: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '26px 0'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-lg)'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement(NavLink, {
    key: n,
    href: '#' + n.toLowerCase(),
    active: page === n,
    onClick: e => {
      e.preventDefault();
      onNav(n);
    }
  }, n))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: onBook
  }, "Book Now")));
}
function SiteFooter({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-bg-deep)',
      borderTop: '1px solid var(--color-border-hairline)',
      padding: '48px 5% 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(100%, var(--container-width))',
      marginInline: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-lg)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 13
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: '#' + n.toLowerCase(),
    onClick: e => {
      e.preventDefault();
      onNav(n);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 9,
      letterSpacing: 'var(--tracking-footer)',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)',
      textDecoration: 'none'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "instagram",
    label: "Instagram",
    size: 30
  }), /*#__PURE__*/React.createElement(IconButton, {
    name: "facebook",
    label: "Facebook",
    size: 30
  }), /*#__PURE__*/React.createElement(IconButton, {
    name: "mail",
    label: "Email",
    size: 30
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(100%, var(--container-width))',
      marginInline: 'auto',
      marginTop: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(GoldRule, {
    opacity: 0.18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(100%, var(--container-width))',
      marginInline: 'auto',
      marginTop: 'var(--space-sm)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-md)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      letterSpacing: 'var(--tracking-footer)',
      color: 'var(--color-text-muted)'
    }
  }, "\xA9 2026 Cape Relaxation Spa"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#privacy",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 9,
      letterSpacing: 'var(--tracking-footer)',
      color: 'var(--color-text-muted)',
      textDecoration: 'none'
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#terms",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 9,
      letterSpacing: 'var(--tracking-footer)',
      color: 'var(--color-text-muted)',
      textDecoration: 'none'
    }
  }, "Terms"))));
}
const Section = ({
  children,
  tone = 'bg',
  style
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    background: tone === 'deep' ? 'var(--color-bg-deep)' : 'var(--color-bg)',
    padding: 'var(--section-pad-y) var(--section-pad-x)',
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 'min(100%, var(--container-width))',
    marginInline: 'auto'
  }
}, children));
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Wordmark,
  Section,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  SectionHeading,
  Eyebrow,
  GoldRule,
  InfoCard,
  ServiceCard,
  ImageFrame,
  Badge
} = window.CapeRelaxationSpaDesignSystem_26291a;
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 620,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      background: 'var(--color-bg-deep)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(160deg,#2b2724 0%,#1b1917 55%,#141312 100%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-image)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-vignette)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '150px 0 120px 5%',
      display: 'grid',
      gap: 'var(--space-md)',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Cape Relaxation Spa"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--size-hero)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 'var(--leading-hero)',
      letterSpacing: 'var(--tracking-hero)',
      textTransform: 'uppercase',
      color: 'var(--color-text)'
    }
  }, "Redefine", /*#__PURE__*/React.createElement("br", null), "Relaxation"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--font-sm)',
      lineHeight: 'var(--leading-body)',
      fontWeight: 300,
      color: 'var(--color-text-muted)',
      maxWidth: '44ch'
    }
  }, "Personalised treatments in peaceful surroundings, with time set aside for nothing but your complete relaxation."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)',
      marginTop: 'var(--space-xs)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onBook
  }, "Book Now"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Explore treatments"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      minHeight: 620,
      display: 'grid',
      placeItems: 'center',
      padding: '110px 5% 90px 0'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "4/5",
    label: "Massage treatment \xB7 candlelight",
    radius: "var(--radius-md)",
    style: {
      width: '100%',
      maxWidth: 380
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -18,
      left: 0,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(GoldRule, {
    variant: "curve"
  })));
}
function Home({
  onBook,
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onBook: onBook
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Welcome",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Indulge in", /*#__PURE__*/React.createElement("br", null), "Serenity"),
    body: "Six treatment rooms, six therapists, and a single appointment at a time. Everything here is arranged so the hour belongs to you."
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(InfoCard, {
    title: "Services",
    description: "Treatments shaped around what your body asks for on the day.",
    items: ['Massage therapy', 'Facial rituals', 'Body wraps', 'Aromatherapy'],
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "onLight",
      size: "sm",
      onClick: () => onNav('Services')
    }, "View all")
  }), /*#__PURE__*/React.createElement(InfoCard, {
    title: "About Spa",
    description: "A private studio above the harbour, open by appointment since 2011.",
    items: ['Est. 2011', 'Six treatment rooms', 'Organic products only'],
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "onLight",
      size: "sm",
      onClick: () => onNav('About')
    }, "Our story")
  }), /*#__PURE__*/React.createElement(InfoCard, {
    tone: "ivory",
    title: "Packages",
    description: "Half and full-day retreats, alone or as a pair.",
    items: ['Half day · 3 hrs', 'Full day · 6 hrs', 'Couples retreat'],
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "onLight",
      size: "sm",
      onClick: () => onNav('Packages')
    }, "See packages")
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "deep"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our Services",
    title: "Refined Care"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-md)',
      marginTop: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "flower",
    title: "Spa",
    description: "Full-body rituals in candlelight.",
    price: "$180"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "sparkles",
    title: "Facial",
    description: "Gentle resurfacing and massage.",
    price: "$140"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "hand-heart",
    title: "Massage",
    description: "Deep tissue or slow Swedish.",
    price: "$150"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "leaf",
    title: "Aroma",
    description: "Warm oils, chosen by scent.",
    price: "$120"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-2xl)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "4/5",
    label: "Treatment room \xB7 4:5"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "This Season",
    title: "Winter Ritual",
    body: "Ninety minutes: warm oil massage, hot stones along the spine, and a quiet half hour with tea afterwards."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "gold"
  }, "90 min"), /*#__PURE__*/React.createElement(Badge, {
    variant: "price"
  }, "$210")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onBook
  }, "Book Now"))))));
}
Object.assign(window, {
  Home,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  ServiceCard,
  Button,
  GoldRule,
  Badge,
  Eyebrow,
  ImageFrame,
  InfoCard
} = window.CapeRelaxationSpaDesignSystem_26291a;
const TREATMENTS = [{
  icon: 'hand-heart',
  title: 'Deep Tissue',
  description: 'Firm, slow pressure through the back and shoulders.',
  price: '$150'
}, {
  icon: 'flower',
  title: 'Signature Ritual',
  description: 'Full-body oil massage with a scalp finish.',
  price: '$180'
}, {
  icon: 'sparkles',
  title: 'Radiance Facial',
  description: 'Cleanse, enzyme peel, lymphatic massage.',
  price: '$140'
}, {
  icon: 'leaf',
  title: 'Aromatherapy',
  description: 'Blended oils chosen with you before the treatment.',
  price: '$120'
}, {
  icon: 'flame',
  title: 'Hot Stone',
  description: 'Basalt stones worked along the spine.',
  price: '$165'
}, {
  icon: 'droplets',
  title: 'Body Wrap',
  description: 'Mineral clay, warm linen, thirty quiet minutes.',
  price: '$135'
}, {
  icon: 'moon',
  title: 'Evening Calm',
  description: 'A shorter treatment for after work.',
  price: '$95'
}, {
  icon: 'sprout',
  title: 'Mother To Be',
  description: 'Side-lying massage from the second trimester.',
  price: '$130'
}];
function PageHeader({
  eyebrow,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--color-bg-deep)',
      padding: '150px 5% 70px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(160deg,#26221f,#151514)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-vignette)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 'min(100%, var(--container-width))',
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: eyebrow,
    title: title,
    body: body,
    level: "hero"
  })));
}
function Services({
  onBook
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Our Services",
    title: "Relax & Restore",
    body: "Eight treatments, each booked as a single appointment so the room is yours alone."
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-md)'
    }
  }, TREATMENTS.map(t => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: t.title
  }, t))))), /*#__PURE__*/React.createElement(Section, {
    tone: "deep"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 'var(--space-2xl)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Packages"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--size-section-title)',
      fontWeight: 400,
      lineHeight: 1,
      textTransform: 'uppercase',
      color: 'var(--color-text)'
    }
  }, "Spend the day"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)',
      marginTop: 'var(--space-xs)'
    }
  }, [['Half Day', '3 hours · two treatments · lunch', '$260'], ['Full Day', '6 hours · four treatments · lunch', '$480'], ['Couples Retreat', '3 hours · shared room · sparkling', '$540']].map(([n, d, p]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-md)',
      paddingBottom: 'var(--space-sm)',
      borderBottom: '1px solid var(--color-border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--font-lg)',
      textTransform: 'uppercase',
      letterSpacing: '.03em'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-muted)',
      fontWeight: 300
    }
  }, d)), /*#__PURE__*/React.createElement(Badge, {
    variant: "price"
  }, p)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onBook
  }, "Book a package"))), /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "16/9",
    label: "Relaxation lounge \xB7 16:9"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(InfoCard, {
    title: "Before",
    description: "Arrive twenty minutes early for tea and a short consultation.",
    items: ['Tea on arrival', 'Consultation', 'Robe and slippers']
  }), /*#__PURE__*/React.createElement(InfoCard, {
    title: "During",
    description: "Pressure, oils and music are all adjusted as you go.",
    items: ['Silent option', 'Choice of oils', 'Heated bed']
  }), /*#__PURE__*/React.createElement(InfoCard, {
    tone: "ivory",
    title: "After",
    description: "The lounge stays yours for as long as you like.",
    items: ['Quiet lounge', 'Herbal infusions', 'No rush']
  }))));
}
Object.assign(window, {
  Services,
  PageHeader,
  TREATMENTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.InfoCard = __ds_scope.InfoCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GoldRule = __ds_scope.GoldRule;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.OrnamentIcon = __ds_scope.OrnamentIcon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
