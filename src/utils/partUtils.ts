export const shouldFlipPart = (partId: string): boolean => {
  return partId === 'rightArm' || partId === 'rightFoot';
};