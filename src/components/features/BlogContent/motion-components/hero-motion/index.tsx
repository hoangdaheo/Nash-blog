import './styles.css';
import Lines from './Lines';

export default function HeroMotion() {
  return (
    <div className='container'>
      <div>Flexibility</div>

      <div>Focus</div>
      <div>Fast Learning</div>
      <div style={{ gridColumn: '1 / -1' }}>
        <Lines />
      </div>

      <div style={{ gridColumn: '1 / -1' }}>
        <span>three-F</span>
      </div>
    </div>
  );
}
