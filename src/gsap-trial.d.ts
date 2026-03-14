declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(
      target: string | Element | (string | Element)[],
      options?: {
        type?: string;
        linesClass?: string;
        wordsClass?: string;
        charsClass?: string;
      }
    );
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(options?: object): ScrollSmoother;
    static refresh(soft?: boolean): void;
    static get(): ScrollSmoother;
    paused(value?: boolean): this | boolean;
    scrollTop(position?: number): number | this;
    scrollTo(target: string | Element | number | null, smooth?: boolean, position?: string): void;
    kill(): void;
  }
}

