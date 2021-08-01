import WelcomePhrase from '../welcomephrase/WelcomePhrase';
import Button from '../button/Button';
import './Home.css';

export default function Home() {
  return (
    <div className="button-container">
      <WelcomePhrase message={'welcome to sprink'}/>
      <Button list={"/list"}/>
    </div>
  );
}
