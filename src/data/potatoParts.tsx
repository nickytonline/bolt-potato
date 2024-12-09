import Image from '../components/Image';
import mustacheImg from '../assets/images/mustache.png';
import eyesImg from '../assets/images/eyes.png';
import leftArmImg from '../assets/images/left-arm.png';
import rightArmImg from '../assets/images/right-arm.png';
import feetImg from '../assets/images/feet.png';
import lipsImg from '../assets/images/lips.png';

export const potatoParts = [
  {
    id: 'eyes',
    type: 'eyes',
    name: 'Eyes',
    Component: ({ className }: { className?: string }) => (
      <Image src={eyesImg} alt="Eyes" className={className} />
    )
  },
  {
    id: 'lips',
    type: 'lips',
    name: 'Lips',
    Component: ({ className }: { className?: string }) => (
      <Image src={lipsImg} alt="Lips" className={className} />
    )
  },
  {
    id: 'mustache',
    type: 'mustache',
    name: 'Mustache',
    Component: ({ className }: { className?: string }) => (
      <Image src={mustacheImg} alt="Mustache" className={className} />
    )
  },
  {
    id: 'leftArm',
    type: 'arm',
    name: 'Left Arm',
    Component: ({ className }: { className?: string }) => (
      <Image src={leftArmImg} alt="Left Arm" className={className} />
    )
  },
  {
    id: 'rightArm',
    type: 'arm',
    name: 'Right Arm',
    Component: ({ className }: { className?: string }) => (
      <Image src={rightArmImg} alt="Right Arm" className={className} />
    )
  },
  {
    id: 'feet',
    type: 'feet',
    name: 'Feet',
    Component: ({ className }: { className?: string }) => (
      <Image src={feetImg} alt="Right Foot" className={className} />
    )
  },
];