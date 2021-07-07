const Project = ({ id, color, title, bg, desc }) => {
  const expand = () => {
    const project = document.querySelector('#' + id);
    const title = document.querySelector('#' + id + '-title');
    const desc = document.querySelector('#' + id + '-desc');
    project.style.width = '15%';
    project.style.backgroundImage =
      'linear-gradient(135deg,' +
      color +
      ' 0% ,' +
      color +
      ' 35%, rgba(0,0,0,0) 100%), url("' +
      bg +
      '")';
    title.style.transform = 'rotate(0deg) translateY(50%)';
    desc.style.animation = 'show 0.2s steps(1)';
    desc.style.display = 'initial';
    desc.style.visibility = 'visible';
  };

  const shrink = () => {
    const project = document.querySelector('#' + id);
    const title = document.querySelector('#' + id + '-title');
    const desc = document.querySelector('#' + id + '-desc');
    project.style.width = '4%';
    project.style.backgroundImage = '';
    title.style.transform = 'rotate(-90deg)';
    desc.style.animation = '';
    desc.style.display = 'none';
    desc.style.visibility = 'hidden';
  };

  return (
    <div
      id={id}
      className="project"
      style={{ backgroundColor: color }}
      onMouseOver={expand}
      onMouseLeave={shrink}
    >
      <div id={id + '-title'} className="project-title">
        {title}
      </div>
      <div id={id + '-desc'} className="project-description">
        {desc}
      </div>
    </div>
  );
};

export default Project;
