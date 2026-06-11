/* @ds-bundle: {"format":3,"namespace":"DUALComunicacionesDesignSystem_8c2d1b","components":[{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"ArrowButton","sourcePath":"components/core/ArrowButton.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/content/Card.jsx":"9495012add05","components/content/StatBlock.jsx":"9675d5971a44","components/core/ArrowButton.jsx":"884802416826","components/core/Button.jsx":"a72520c70f88","components/core/Eyebrow.jsx":"310358c34f3e","components/core/Tag.jsx":"41e80ef8cdbb","components/forms/Input.jsx":"54139d9fb9ea","components/forms/Textarea.jsx":"3bd8e8f086bf","ui_kits/landing/App.jsx":"d55bf9e18204","ui_kits/landing/Cases.jsx":"1dbbb72604ce","ui_kits/landing/Contact.jsx":"60dc590357d4","ui_kits/landing/Footer.jsx":"e98f99b7ce92","ui_kits/landing/Hero.jsx":"7dc8264faefd","ui_kits/landing/Nav.jsx":"05e87b5eca74","ui_kits/landing/Process.jsx":"66aa641bd827","ui_kits/landing/Services.jsx":"c8df077f7ca1","ui_kits/landing/Testimonials.jsx":"f393db21b197","ui_kits/landing/WhyDual.jsx":"9276274bfc0e","ui_kits/landing/image-slot.js":"9309434cb09c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DUALComunicacionesDesignSystem_8c2d1b = window.DUALComunicacionesDesignSystem_8c2d1b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DUAL StatBlock — oversized display figure with a label, for results and
 * differentiators ("+120 marcas", "8 años"). Optional accent on the figure.
 */
function StatBlock({
  value,
  label,
  suffix,
  accent = false,
  onInk = false,
  align = 'left',
  style = {},
  ...rest
}) {
  const figureColor = accent ? 'var(--accent)' : onInk ? 'var(--text-on-ink)' : 'var(--text-primary)';
  const labelColor = onInk ? 'var(--text-on-ink-muted)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.12em',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--fs-display)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-display)',
      color: figureColor
    }
  }, /*#__PURE__*/React.createElement("span", null, value), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'normal',
      fontWeight: 'var(--fw-light)',
      fontSize: '0.5em',
      color: accent ? 'var(--accent)' : labelColor
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: labelColor,
      maxWidth: '22ch'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.dual-arrowbtn{
  --_size: 3.25rem; --_bg: var(--ink-900); --_fg: var(--bone-50); --_bd: transparent;
  display:inline-flex; align-items:center; justify-content:center;
  width:var(--_size); height:var(--_size); border-radius:999px;
  background:var(--_bg); color:var(--_fg);
  border:var(--border-med) solid var(--_bd);
  cursor:pointer; padding:0; flex:none;
  transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out), transform var(--dur-base) var(--ease-out);
}
.dual-arrowbtn:hover{ transform: rotate(8deg); }
.dual-arrowbtn:active{ transform: rotate(8deg) scale(0.94); }
.dual-arrowbtn:focus-visible{ outline:2px solid var(--focus-ring); outline-offset:3px; }
.dual-arrowbtn svg{ transition: transform var(--dur-base) var(--ease-out); }

.dual-arrowbtn--accent{ --_bg:var(--terra-500); }
.dual-arrowbtn--accent:hover{ --_bg:var(--terra-600); }
.dual-arrowbtn--outline{ --_bg:transparent; --_fg:var(--ink-900); --_bd:var(--ink-900); }
.dual-arrowbtn--outline:hover{ --_bg:var(--ink-900); --_fg:var(--bone-50); }
.dual-arrowbtn--soft{ --_bg:var(--bone-50); --_fg:var(--ink-900); --_bd:var(--border-subtle); }
.dual-arrowbtn--soft:hover{ --_bd:var(--ink-900); }

.dual-arrowbtn--sm{ --_size:2.5rem; }
.dual-arrowbtn--lg{ --_size:4.5rem; }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('dual-arrowbtn-css')) return;
  const s = document.createElement('style');
  s.id = 'dual-arrowbtn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const PATHS = {
  right: 'M5 12h13M12 5l7 7-7 7',
  upright: 'M7 17L17 7M9 7h8v8',
  down: 'M12 5v13M5 12l7 7 7-7',
  left: 'M19 12H6M12 5l-7 7 7 7'
};
function ArrowButton({
  direction = 'right',
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}) {
  inject();
  const cls = ['dual-arrowbtn', `dual-arrowbtn--${variant}`, size !== 'md' ? `dual-arrowbtn--${size}` : '', className].filter(Boolean).join(' ');
  const stroke = size === 'lg' ? 1.6 : 1.8;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: PATHS[direction],
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { ArrowButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.dual-btn{
  --_bg: var(--ink-900); --_fg: var(--bone-50); --_bd: transparent;
  display:inline-flex; align-items:center; gap:0.6em;
  font-family:var(--font-body); font-weight:var(--fw-semibold);
  font-size:var(--fs-sm); line-height:1; letter-spacing:0.01em;
  padding:0.95em 1.5em; border-radius:var(--radius-pill);
  background:var(--_bg); color:var(--_fg);
  border:var(--border-med) solid var(--_bd);
  cursor:pointer; text-decoration:none; white-space:nowrap;
  transition: background var(--dur-fast) var(--ease-out),
              color var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out),
              transform var(--dur-fast) var(--ease-out);
}
.dual-btn:hover{ transform: translateY(-1px); }
.dual-btn:active{ transform: translateY(0); }
.dual-btn:focus-visible{ outline:2px solid var(--focus-ring); outline-offset:3px; }
.dual-btn[disabled]{ opacity:0.4; cursor:not-allowed; transform:none; }

.dual-btn--accent{ --_bg:var(--terra-500); --_fg:var(--bone-50); }
.dual-btn--accent:hover{ --_bg:var(--terra-600); }
.dual-btn--primary{ --_bg:var(--ink-900); --_fg:var(--bone-50); }
.dual-btn--primary:hover{ --_bg:var(--ink-800); }
.dual-btn--secondary{ --_bg:transparent; --_fg:var(--ink-900); --_bd:var(--ink-900); }
.dual-btn--secondary:hover{ --_bg:var(--ink-900); --_fg:var(--bone-50); }
.dual-btn--ghost{ --_bg:transparent; --_fg:var(--ink-900); --_bd:var(--border-subtle); }
.dual-btn--ghost:hover{ --_bd:var(--ink-900); }

.dual-btn--sm{ padding:0.7em 1.15em; font-size:var(--fs-xs); }
.dual-btn--lg{ padding:1.15em 1.9em; font-size:var(--fs-body); }

.dual-btn__dot{ width:0.55em; height:0.55em; border-radius:999px; background:currentColor; opacity:0.9; }
.dual-btn__arrow{ display:inline-flex; transition:transform var(--dur-base) var(--ease-out); }
.dual-btn:hover .dual-btn__arrow{ transform:translateX(0.25em); }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('dual-btn-css')) return;
  const s = document.createElement('style');
  s.id = 'dual-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  dot = false,
  as = 'button',
  className = '',
  ...rest
}) {
  inject();
  const Tag = as;
  const cls = ['dual-btn', `dual-btn--${variant}`, size !== 'md' ? `dual-btn--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "dual-btn__dot"
  }), /*#__PURE__*/React.createElement("span", null, children), arrow && /*#__PURE__*/React.createElement("span", {
    className: "dual-btn__arrow",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8h9M8.5 4l4 4-4 4",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.dual-eyebrow{
  display:inline-flex; align-items:center; gap:0.7em;
  font-family:var(--font-mono); font-size:var(--fs-label);
  font-weight:var(--fw-regular); letter-spacing:var(--ls-label);
  text-transform:uppercase; color:var(--text-muted);
}
.dual-eyebrow__index{ color:var(--accent); }
.dual-eyebrow__line{ width:2.4em; height:1px; background:var(--border-subtle); }
.dual-eyebrow--on-ink{ color:var(--text-on-ink-muted); }
.dual-eyebrow--on-ink .dual-eyebrow__line{ background:var(--border-on-ink); }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('dual-eyebrow-css')) return;
  const s = document.createElement('style');
  s.id = 'dual-eyebrow-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Eyebrow({
  index,
  children,
  line = true,
  onInk = false,
  className = '',
  ...rest
}) {
  inject();
  const cls = ['dual-eyebrow', onInk ? 'dual-eyebrow--on-ink' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    className: "dual-eyebrow__index"
  }, "/", index), line && /*#__PURE__*/React.createElement("span", {
    className: "dual-eyebrow__line",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.dual-tag{
  --_bg: var(--bone-50); --_fg: var(--ink-900); --_bd: var(--border-subtle);
  display:inline-flex; align-items:center; gap:0.5em;
  font-family:var(--font-body); font-weight:var(--fw-medium);
  font-size:var(--fs-xs); line-height:1; letter-spacing:0.01em;
  padding:0.55em 0.95em; border-radius:var(--radius-pill);
  background:var(--_bg); color:var(--_fg);
  border:var(--border-hair) solid var(--_bd);
  white-space:nowrap;
}
.dual-tag--solid{ --_bg:var(--ink-900); --_fg:var(--bone-50); --_bd:transparent; }
.dual-tag--accent{ --_bg:var(--terra-500); --_fg:var(--bone-50); --_bd:transparent; }
.dual-tag--tint{ --_bg:var(--terra-100); --_fg:var(--terra-700); --_bd:transparent; }
.dual-tag--float{ box-shadow:var(--shadow-pill); --_bd:transparent; }
.dual-tag--glass{ background:rgba(250,248,243,0.18); color:var(--bone-50); border-color:rgba(250,248,243,0.34); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); }
.dual-tag--mono{ font-family:var(--font-mono); text-transform:uppercase; letter-spacing:var(--ls-label); font-weight:var(--fw-regular); font-size:var(--fs-label); }

.dual-tag__dot{ width:0.5em; height:0.5em; border-radius:999px; background:var(--terra-500); }
.dual-tag--solid .dual-tag__dot, .dual-tag--accent .dual-tag__dot{ background:currentColor; }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('dual-tag-css')) return;
  const s = document.createElement('style');
  s.id = 'dual-tag-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tag({
  children,
  variant = 'default',
  dot = false,
  mono = false,
  float = false,
  className = '',
  ...rest
}) {
  inject();
  const cls = ['dual-tag', variant !== 'default' ? `dual-tag--${variant}` : '', mono ? 'dual-tag--mono' : '', float ? 'dual-tag--float' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "dual-tag__dot"
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DUAL Card — the bento block. Two modes:
 *  • surface card (paper / ink / tint): number + title + body, arrow in corner.
 *  • media card: editorial photo with a warm scrim, tag top-left, title bottom.
 * Pass an `image` url (or use the slot fallback) to switch into media mode.
 */
function Card({
  variant = 'paper',
  image,
  imageAlt = '',
  number,
  tag,
  title,
  children,
  arrow = false,
  arrowDirection = 'upright',
  height,
  style = {},
  ...rest
}) {
  const isMedia = variant === 'media';
  const surfaces = {
    paper: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-subtle)'
    },
    ink: {
      background: 'var(--surface-ink)',
      color: 'var(--text-on-ink)',
      border: '1px solid var(--surface-ink)'
    },
    tint: {
      background: 'var(--surface-tint)',
      color: 'var(--text-primary)',
      border: '1px solid var(--terra-100)'
    }
  };
  const shell = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 'var(--radius-xl)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-card)',
    minHeight: height || (isMedia ? 360 : 'auto'),
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    ...(isMedia ? {
      color: 'var(--bone-50)'
    } : surfaces[variant] || surfaces.paper),
    ...style
  };
  const onEnter = e => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-pop)';
  };
  const onLeave = e => {
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = 'var(--shadow-card)';
  };
  if (isMedia) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: shell,
      onMouseEnter: onEnter,
      onMouseLeave: onLeave
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, image ? /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: imageAlt,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        background: 'linear-gradient(150deg, var(--clay-200), var(--bone-300))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-label)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        color: 'var(--clay-600)'
      }
    }, "Imagen editorial")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(23,21,15,0.05) 0%, rgba(23,21,15,0) 38%, rgba(23,21,15,0.62) 100%)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 'var(--space-5)'
      }
    }, tag ? /*#__PURE__*/React.createElement(__ds_scope.Tag, {
      variant: "glass"
    }, tag) : /*#__PURE__*/React.createElement("span", null), arrow && /*#__PURE__*/React.createElement(__ds_scope.ArrowButton, {
      direction: arrowDirection,
      variant: "soft",
      size: "sm"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        marginTop: 'auto',
        padding: 'var(--space-5)'
      }
    }, number && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-sm)',
        marginBottom: '0.4rem',
        opacity: 0.9
      }
    }, "/", number), title && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-h3)',
        fontWeight: 'var(--fw-bold)',
        lineHeight: 'var(--lh-snug)',
        letterSpacing: 'var(--ls-display)'
      }
    }, title), children && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '0.6rem',
        fontSize: 'var(--fs-sm)',
        lineHeight: 'var(--lh-body)',
        opacity: 0.92,
        maxWidth: '40ch'
      }
    }, children)));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...shell,
      padding: 'var(--space-6)'
    },
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem'
    }
  }, number && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-sm)',
      color: variant === 'ink' ? 'var(--clay-400)' : 'var(--text-accent)'
    }
  }, "/", number), tag && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    variant: variant === 'ink' ? 'glass' : 'tint'
  }, tag)), arrow && /*#__PURE__*/React.createElement(__ds_scope.ArrowButton, {
    direction: arrowDirection,
    variant: variant === 'ink' ? 'soft' : 'outline',
    size: "sm"
  })), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-display)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: variant === 'ink' ? 'rgba(243,239,230,0.72)' : 'var(--text-secondary)'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DUAL Input — editorial form field. Underline style by default (minimal,
 * paper-native); `box` style for cards/dark surfaces. Set tone="on-ink" on
 * dark blocks.
 */
function Input({
  label,
  type = 'text',
  variant = 'underline',
  tone = 'default',
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const onInk = tone === 'on-ink';
  const labelColor = onInk ? 'var(--text-on-ink-muted)' : 'var(--text-muted)';
  const textColor = onInk ? 'var(--text-on-ink)' : 'var(--text-primary)';
  const line = onInk ? 'var(--border-on-ink)' : 'var(--border-subtle)';
  const common = {
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-body)',
    color: textColor,
    background: 'transparent',
    outline: 'none',
    transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
  };
  const variants = {
    underline: {
      ...common,
      border: 'none',
      borderBottom: `1.5px solid ${line}`,
      borderRadius: 0,
      padding: '0.6rem 0'
    },
    box: {
      ...common,
      border: `1.5px solid ${line}`,
      borderRadius: 'var(--radius-md)',
      padding: '0.8rem 1rem',
      background: onInk ? 'rgba(243,239,230,0.06)' : 'var(--surface-card)'
    }
  };
  const focus = e => {
    e.currentTarget.style.borderColor = 'var(--accent)';
    if (variant === 'box') e.currentTarget.style.boxShadow = '0 0 0 3px var(--terra-100)';
  };
  const blur = e => {
    e.currentTarget.style.borderColor = line;
    e.currentTarget.style.boxShadow = 'none';
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: labelColor
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    style: variants[variant] || variants.underline,
    onFocus: focus,
    onBlur: blur
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DUAL Textarea — multiline field matching Input's editorial style.
 */
function Textarea({
  label,
  variant = 'underline',
  tone = 'default',
  rows = 4,
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const onInk = tone === 'on-ink';
  const labelColor = onInk ? 'var(--text-on-ink-muted)' : 'var(--text-muted)';
  const textColor = onInk ? 'var(--text-on-ink)' : 'var(--text-primary)';
  const line = onInk ? 'var(--border-on-ink)' : 'var(--border-subtle)';
  const common = {
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-body)',
    color: textColor,
    background: 'transparent',
    outline: 'none',
    resize: 'vertical',
    lineHeight: 'var(--lh-body)',
    transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
  };
  const variants = {
    underline: {
      ...common,
      border: 'none',
      borderBottom: `1.5px solid ${line}`,
      borderRadius: 0,
      padding: '0.6rem 0'
    },
    box: {
      ...common,
      border: `1.5px solid ${line}`,
      borderRadius: 'var(--radius-md)',
      padding: '0.8rem 1rem',
      background: onInk ? 'rgba(243,239,230,0.06)' : 'var(--surface-card)'
    }
  };
  const focus = e => {
    e.currentTarget.style.borderColor = 'var(--accent)';
    if (variant === 'box') e.currentTarget.style.boxShadow = '0 0 0 3px var(--terra-100)';
  };
  const blur = e => {
    e.currentTarget.style.borderColor = line;
    e.currentTarget.style.boxShadow = 'none';
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: labelColor
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    style: variants[variant] || variants.underline,
    onFocus: focus,
    onBlur: blur
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/App.jsx
try { (() => {
function Marquee() {
  const items = ['Estrategia de marca', 'Public Relations', 'Influencer marketing', 'Contenido editorial', 'Eventos & activaciones', 'Merchandising'];
  const loop = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    className: "l-marquee",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-marquee__track"
  }, loop.map((it, i) => /*#__PURE__*/React.createElement("span", {
    className: "l-marquee__item",
    key: i
  }, it))));
}
function App() {
  React.useEffect(() => {
    const page = document.querySelector('.l-page');
    page.setAttribute('data-reveal-ready', '');
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "l-page"
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(WhyDual, null), /*#__PURE__*/React.createElement(Cases, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Cases.jsx
try { (() => {
function Cases() {
  const {
    Eyebrow,
    Tag,
    ArrowButton
  } = DS;
  const cases = [{
    id: 'caso-1',
    tag: 'Lanzamiento',
    cat: 'Bebidas',
    title: 'Aurora — debut nacional',
    span: 'span-7',
    h: 460
  }, {
    id: 'caso-2',
    tag: 'PR & prensa',
    cat: 'Moda',
    title: 'Casa Mira',
    span: 'span-5',
    h: 460
  }, {
    id: 'caso-3',
    tag: 'Influencers',
    cat: 'Belleza',
    title: 'Lumière Skin',
    span: 'span-4',
    h: 380
  }, {
    id: 'caso-4',
    tag: 'Evento',
    cat: 'Tech',
    title: 'Vértice Summit',
    span: 'span-4',
    h: 380
  }, {
    id: 'caso-5',
    tag: 'Contenido',
    cat: 'Hospitality',
    title: 'Hotel Sálvora',
    span: 'span-4',
    h: 380
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "casos",
    className: "l-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-container"
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 'var(--space-5)',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "03"
  }, "Casos de \xE9xito"), /*#__PURE__*/React.createElement("h2", {
    className: "l-head__title"
  }, "Trabajo que ", /*#__PURE__*/React.createElement("span", {
    className: "ser"
  }, "habla por s\xED solo"))), /*#__PURE__*/React.createElement("a", {
    className: "l-nav__link",
    href: "#contacto",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.7rem',
      fontWeight: 600
    }
  }, "Ver portafolio completo ", /*#__PURE__*/React.createElement(ArrowButton, {
    direction: "upright",
    variant: "outline",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "l-bento"
  }, cases.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    className: c.span,
    "data-reveal": true,
    "data-reveal-delay": i % 3 + 1
  }, /*#__PURE__*/React.createElement(CaseCard, c))))));
}
function CaseCard({
  id,
  tag,
  cat,
  title,
  h
}) {
  const {
    Tag,
    ArrowButton
  } = DS;
  return /*#__PURE__*/React.createElement("article", {
    className: "l-photo",
    style: {
      position: 'relative',
      height: h,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: id,
    shape: "rounded",
    radius: "30",
    placeholder: 'Caso · ' + cat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(23,21,15,0.06) 0%, rgba(23,21,15,0) 34%, rgba(23,21,15,0.66) 100%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'var(--space-5)',
      left: 'var(--space-5)',
      right: 'var(--space-5)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "glass"
  }, tag), /*#__PURE__*/React.createElement(ArrowButton, {
    direction: "upright",
    variant: "soft",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--space-5)',
      bottom: 'var(--space-5)',
      right: 'var(--space-5)',
      color: 'var(--bone-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      opacity: 0.86,
      marginBottom: '0.35rem'
    }
  }, cat), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h3)',
      letterSpacing: 'var(--ls-display)',
      margin: 0
    }
  }, title)));
}
window.Cases = Cases;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Cases.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Contact.jsx
try { (() => {
function Contact() {
  const {
    Eyebrow,
    Input,
    Textarea,
    Button,
    Tag
  } = DS;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    className: "l-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-ink",
    "data-reveal": true,
    style: {
      padding: 'clamp(1.75rem, 4vw, 3rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-bento",
    style: {
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "span-5"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "06",
    onInk: true
  }, "Hablemos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--fs-display)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-on-ink)',
      margin: 'var(--space-5) 0 var(--space-5)'
    }
  }, "\xBFLista tu marca para ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      color: 'var(--lime-400)'
    }
  }, "dejar de pasar desapercibida?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-on-ink-muted)',
      maxWidth: '40ch',
      marginBottom: 'var(--space-6)'
    }
  }, "Cu\xE9ntanos qu\xE9 quieres construir. Respondemos en menos de 48 horas con una primera lectura estrat\xE9gica."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "glass"
  }, "hola@dualcomunicaciones.com"), /*#__PURE__*/React.createElement(Tag, {
    variant: "glass"
  }, "+57 300 000 0000"))), /*#__PURE__*/React.createElement("div", {
    className: "span-7"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    tone: "on-ink",
    placeholder: "\xBFC\xF3mo te llamas?",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Marca / empresa",
    tone: "on-ink",
    placeholder: "Tu marca"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    tone: "on-ink",
    type: "email",
    placeholder: "nombre@empresa.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Servicio de inter\xE9s",
    tone: "on-ink",
    placeholder: "PR, influencers, contenido\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "Cu\xE9ntanos",
    tone: "on-ink",
    rows: 3,
    placeholder: "\xBFQu\xE9 quieres lograr?"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    arrow: true,
    type: "submit"
  }, "Enviar mensaje"), sent && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--lime-400)'
    }
  }, "\u2733 Gracias \u2014 te contactamos pronto."))))))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Footer.jsx
try { (() => {
function Footer() {
  const cols = [['Servicios', ['Estrategia', 'Public Relations', 'Influencer marketing', 'Contenido', 'Eventos', 'Merchandising']], ['Agencia', ['Por qué Dual', 'Casos de éxito', 'Proceso', 'Equipo']], ['Contacto', ['hola@dualcomunicaciones.com', '+57 300 000 0000', 'Bogotá · LATAM']]];
  const social = ['Instagram', 'LinkedIn', 'TikTok', 'Behance'];
  return /*#__PURE__*/React.createElement("footer", {
    className: "l-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-container",
    style: {
      paddingBlock: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1.1fr',
      gap: 'var(--space-7)',
      paddingBottom: 'var(--space-7)',
      borderBottom: '1px solid var(--border-on-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/dual-wordmark-white.png",
    alt: "DUAL",
    style: {
      height: 30,
      marginBottom: 'var(--space-5)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '1.45rem',
      lineHeight: 1.28,
      letterSpacing: '-0.01em',
      color: 'var(--text-on-ink)',
      maxWidth: '22ch'
    }
  }, "Construimos marcas visibles, relevantes e imposibles de ignorar.")), cols.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-ink-muted)',
      margin: '0 0 var(--space-4)'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-on-ink)',
      opacity: 0.82
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      paddingTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-on-ink-muted)'
    }
  }, "\xA9 2026 Dual Comunicaciones \xB7 Todos los derechos reservados"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-on-ink)',
      opacity: 0.82
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-on-ink-muted)'
    }
  }, "Privacidad"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-on-ink-muted)'
    }
  }, "T\xE9rminos")))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
function Hero() {
  const {
    Button,
    ArrowButton,
    Tag,
    Eyebrow
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "l-section l-section--tight",
    style: {
      paddingTop: 'clamp(2rem,5vw,3.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-container"
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Agencia de marketing & comunicaciones"), /*#__PURE__*/React.createElement("span", {
    className: "u-label",
    style: {
      color: 'var(--text-faint)'
    }
  }, "LATAM \xB7 Est. 2017")), /*#__PURE__*/React.createElement("h1", {
    "data-reveal": true,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--fs-mega)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-mega)',
      margin: 0,
      maxWidth: '15ch'
    }
  }, "Construimos marcas", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      color: 'var(--accent)'
    }
  }, "imposibles"), ' ', "de ignorar"), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    "data-reveal-delay": "1",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, "No administramos redes sociales. Somos el equipo de estrategia, contenido y relaciones p\xFAblicas que convierte marcas en referentes \u2014 visibles, relevantes y con resultados de negocio reales."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#contacto",
    variant: "accent",
    size: "lg",
    arrow: true
  }, "Empezar un proyecto"), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#casos",
    variant: "secondary",
    size: "lg"
  }, "Ver casos"))), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    "data-reveal-delay": "2",
    style: {
      position: 'relative',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-photo",
    style: {
      height: 'clamp(320px, 46vw, 560px)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "dual-hero",
    shape: "rounded",
    radius: "30",
    placeholder: "Imagen editorial \u2014 lifestyle de campa\xF1a"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--space-6)',
      bottom: 'var(--space-6)',
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap',
      maxWidth: '70%'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "float",
    dot: true
  }, "Estrategia de marca"), /*#__PURE__*/React.createElement(Tag, {
    variant: "float"
  }, "Relaciones p\xFAblicas"), /*#__PURE__*/React.createElement(Tag, {
    variant: "float"
  }, "Influencer marketing"), /*#__PURE__*/React.createElement(Tag, {
    variant: "float"
  }, "Contenido")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 'var(--space-6)',
      top: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(ArrowButton, {
    direction: "down",
    variant: "soft",
    "aria-label": "Despl\xE1zate"
  })))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Nav.jsx
try { (() => {
window.DS = window.DUALComunicacionesDesignSystem_8c2d1b;
function Nav() {
  const {
    Button
  } = DS;
  const [stuck, setStuck] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [['Servicios', '#servicios'], ['Por qué Dual', '#porque'], ['Casos', '#casos'], ['Proceso', '#proceso']];
  return /*#__PURE__*/React.createElement("header", {
    className: 'l-nav' + (stuck ? ' is-stuck' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-container l-nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    "aria-label": "DUAL \u2014 inicio"
  }, /*#__PURE__*/React.createElement("img", {
    className: "l-nav__logo",
    src: "../../assets/logo/dual-wordmark.png",
    alt: "DUAL"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "l-nav__links"
  }, links.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    className: "l-nav__link",
    href: href
  }, label)), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#contacto",
    variant: "primary",
    size: "sm",
    arrow: true
  }, "Hablemos"))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Process.jsx
try { (() => {
function Process() {
  const {
    Eyebrow
  } = DS;
  const steps = [['01', 'Diagnóstico', 'Entendemos negocio, audiencia y contexto competitivo. Auditamos percepción y oportunidad de marca.'], ['02', 'Estrategia', 'Definimos territorio, narrativa, mensajes y el plan de medios, prensa e influencers.'], ['03', 'Producción', 'Creamos contenido, campañas, eventos y activaciones con estándar editorial.'], ['04', 'Crecimiento', 'Medimos, optimizamos y escalamos lo que funciona. Reportes de impacto en negocio.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "proceso",
    className: "l-section",
    style: {
      background: 'var(--surface-cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-head",
    "data-reveal": true,
    style: {
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "04"
  }, "C\xF3mo trabajamos"), /*#__PURE__*/React.createElement("h2", {
    className: "l-head__title"
  }, "Un proceso ", /*#__PURE__*/React.createElement("span", {
    className: "ser"
  }, "claro y medible"))), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    "data-reveal-delay": "1"
  }, steps.map(([n, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "l-row-link",
    style: {
      gridTemplateColumns: 'minmax(0, 88px) minmax(0, 1.1fr) minmax(0, 1.4fr)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: i === steps.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 'var(--fs-h3)',
      color: 'var(--accent)'
    }
  }, "/", n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h3)',
      letterSpacing: 'var(--ls-display)',
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-secondary)',
      margin: 0,
      maxWidth: '46ch'
    }
  }, d))))));
}
window.Process = Process;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Process.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Services.jsx
try { (() => {
function Services() {
  const {
    Card,
    Eyebrow,
    ArrowButton
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    id: "servicios",
    className: "l-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-container"
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 'var(--space-5)',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "01"
  }, "Servicios"), /*#__PURE__*/React.createElement("h2", {
    className: "l-head__title"
  }, "Una agencia, ", /*#__PURE__*/React.createElement("span", {
    className: "ser"
  }, "capacidades completas"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-muted)',
      maxWidth: '34ch'
    }
  }, "Integramos disciplinas que normalmente est\xE1n dispersas en varios proveedores. Una sola conversaci\xF3n, una sola estrategia.")), /*#__PURE__*/React.createElement("div", {
    className: "l-bento",
    "data-reveal": true,
    "data-reveal-delay": "1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "span-5"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "ink",
    number: "01",
    title: "Estrategia & posicionamiento",
    arrow: true,
    style: {
      height: '100%'
    }
  }, "Definimos territorio de marca, narrativa y plan de crecimiento antes de producir una sola pieza.")), /*#__PURE__*/React.createElement("div", {
    className: "span-4"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "paper",
    number: "02",
    title: "Public Relations",
    arrow: true,
    style: {
      height: '100%'
    }
  }, "Vocer\xEDa, relaciones con prensa y gesti\xF3n de reputaci\xF3n que construyen autoridad.")), /*#__PURE__*/React.createElement("div", {
    className: "span-3"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "tint",
    number: "03",
    title: "Influencer marketing",
    arrow: true,
    style: {
      height: '100%'
    }
  }, "Curadur\xEDa de talento y campa\xF1as con creadores relevantes.")), /*#__PURE__*/React.createElement("div", {
    className: "span-4"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "paper",
    number: "04",
    title: "Contenido & producci\xF3n",
    arrow: true,
    style: {
      height: '100%'
    }
  }, "Direcci\xF3n creativa, foto, video y formatos editoriales de alto nivel.")), /*#__PURE__*/React.createElement("div", {
    className: "span-4"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "paper",
    number: "05",
    title: "Eventos & activaciones",
    arrow: true,
    style: {
      height: '100%'
    }
  }, "Experiencias de marca que generan conversaci\xF3n dentro y fuera del recinto.")), /*#__PURE__*/React.createElement("div", {
    className: "span-4"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "paper",
    number: "06",
    title: "Merchandising",
    arrow: true,
    style: {
      height: '100%'
    }
  }, "Objeto de marca con criterio de dise\xF1o \u2014 del concepto a la entrega.")))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Testimonials.jsx
try { (() => {
function Testimonials() {
  const {
    Eyebrow,
    Tag
  } = DS;
  const items = [{
    quote: 'Dual entendió nuestra marca mejor que nosotros. Pasamos de invisibles a referentes en menos de un año.',
    who: 'Nombre del cliente',
    role: 'Cargo · Empresa',
    id: 'tst-1'
  }, {
    quote: 'No es una agencia de redes. Es un socio estratégico que mueve el negocio.',
    who: 'Nombre del cliente',
    role: 'Cargo · Empresa',
    id: 'tst-2'
  }, {
    quote: 'El nivel de producción y prensa nos puso en conversaciones a las que antes no accedíamos.',
    who: 'Nombre del cliente',
    role: 'Cargo · Empresa',
    id: 'tst-3'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "l-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-container"
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "05"
  }, "Testimonios"), /*#__PURE__*/React.createElement("h2", {
    className: "l-head__title"
  }, "Lo que dicen ", /*#__PURE__*/React.createElement("span", {
    className: "ser"
  }, "nuestras marcas"))), /*#__PURE__*/React.createElement(Tag, {
    mono: true,
    variant: "tint"
  }, "Placeholder \xB7 pendiente de clientes reales")), /*#__PURE__*/React.createElement("div", {
    className: "l-bento",
    "data-reveal": true,
    "data-reveal-delay": "1"
  }, items.map((t, i) => /*#__PURE__*/React.createElement("figure", {
    key: t.id,
    className: "span-4",
    style: {
      margin: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '2.4rem',
      lineHeight: 0.7,
      color: 'var(--accent)'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.28rem',
      lineHeight: 1.34,
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)'
    }
  }, t.quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.85rem',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '999px',
      overflow: 'hidden',
      flex: 'none',
      background: 'var(--bone-200)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: t.id,
    shape: "circle",
    placeholder: "Foto"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 600,
      fontSize: 'var(--fs-sm)'
    }
  }, t.who), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, t.role))))))));
}
window.Testimonials = Testimonials;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Testimonials.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/WhyDual.jsx
try { (() => {
function WhyDual() {
  const {
    Eyebrow,
    StatBlock,
    Tag
  } = DS;
  const points = [['Estrategia primero', 'Cada acción responde a un objetivo de negocio, no a una tendencia de la semana.'], ['Equipo senior', 'Trabajas con quien diseña la estrategia — no con un becario detrás de un calendario.'], ['Medición real', 'Reportamos impacto en negocio: visibilidad, posicionamiento y conversión.'], ['Estándar editorial', 'Producción y narrativa al nivel de una firma de branding, no de un feed.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "porque",
    className: "l-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-ink",
    "data-reveal": true,
    style: {
      padding: 'clamp(1.75rem, 4vw, 3rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "02",
    onInk: true
  }, "Por qu\xE9 Dual"), /*#__PURE__*/React.createElement(Tag, {
    variant: "glass"
  }, "El diferenciador")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--fs-display)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-on-ink)',
      margin: 'var(--space-5) 0 0',
      maxWidth: '20ch'
    }
  }, "No somos una agencia de redes.", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      color: 'var(--lime-400)'
    }
  }, "Construimos marcas que importan.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(1.75rem,4vw,3.5rem)',
      flexWrap: 'wrap',
      margin: 'var(--space-6) 0',
      paddingBottom: 'var(--space-6)',
      borderBottom: '1px solid var(--border-on-ink)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "+120",
    label: "Marcas acompa\xF1adas",
    accent: true,
    onInk: true
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "8",
    suffix: "a\xF1os",
    label: "De trayectoria",
    onInk: true
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "40",
    suffix: "%",
    label: "Crecimiento medio en alcance",
    onInk: true
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "15",
    label: "Premios & menciones",
    onInk: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 'var(--space-6)'
    }
  }, points.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      marginBottom: '0.6rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--lime-500)'
    }
  }, "/0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h4)',
      color: 'var(--text-on-ink)',
      margin: 0
    }
  }, t)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-on-ink-muted)'
    }
  }, d)))))));
}
window.WhyDual = WhyDual;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/WhyDual.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.ArrowButton = __ds_scope.ArrowButton;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
