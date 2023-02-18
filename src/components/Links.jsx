
function Links({ children, linkOptions }) {
  const { link, classTitle, target } = linkOptions;

  return (
    <a
      href={link}
      className={classTitle}
      target={target}
    >
      {children}
    </a>
  );
}

export default Links;
