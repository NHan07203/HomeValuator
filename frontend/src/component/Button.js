import btn from '../CSS/componentCSS/Button.module.css'

function Button({ text, bgColor, textColor, borderColor }) {
    return (
      <button
        className={btn.button}
        style={{ "--btn-bg": bgColor, "--btn-color": textColor, "--btn-border": borderColor }}
      >
        {text}
      </button>
    );
  }

export default Button