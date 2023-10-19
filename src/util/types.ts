export type Style = 'fas' | 'far' | 'fab';

export const frameworks = ['HTML', 'REACT', 'VUE'] as const;
export type Framework = (typeof frameworks)[number];

export type Prefix = 'fa-solid' | 'fa-regular' | 'fa-brands' | 'fa-light' | 'fa-thin' | 'fa-duotone';
