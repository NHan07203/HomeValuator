function DetailFeature({icon, title, content}) {
  return (
    <div>
      {icon && <span>{icon}</span>}
      {title && <b>{title}</b>}
      <p>
        {content}
      </p>
    </div>
  );
}

export default DetailFeature;
