const Skill = ({ id }) => {
  var text = '';
  if (id === 'C1') {
    text = 'C/C++';
  } else if (id === 'C2') {
    text = 'C#';
  } else {
    text = id;
  }
  return (
    <div>
      <span
        id={id}
        onMouseOver={() => {
          const skill = document.querySelector('#' + id);

          skill.style.transform = 'scale(1.2, 1.2)';
        }}
        onMouseLeave={() => {
          const skill = document.querySelector('#' + id);
          skill.style.transform = 'scale(1, 1)';

          const logo = document.querySelector('.logo');

          logo.style.display = 'none';
        }}
        onMouseMove={(e) => {
          const logo = document.querySelector('.logo');

          logo.style.display = 'block';
          logo.style.left = e.pageX + 'px';
          logo.style.top = e.pageY + 'px';
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Skill;
