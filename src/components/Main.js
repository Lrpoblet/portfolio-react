import Button from './Button.js';

function Main({ image }) {
  return (
    <main className="main">
      <div className="buttonContainer">
        <Button />
        <Button />
      </div>
      <img
        src={image}
        alt="Logo Lrpoblet"
        title="Logo"
        className="main__logo"
      />
      <div className="buttonContainer">
        <Button />
        <Button />
      </div>
    </main>
  );
}

export default Main;
