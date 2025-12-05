import { Injectable, NgZone, OnDestroy } from '@angular/core';
import Lenis from '@studio-freight/lenis';

@Injectable({ providedIn: 'root' })
export class LenisService implements OnDestroy {
  private lenis: Lenis | null = null;
  private rafId?: number;

  constructor(private zone: NgZone) {
    this.zone.runOutsideAngular(() => {
      this.lenis = new Lenis();
      this.rafId = requestAnimationFrame(this.handleFrame);
    });
  }

  ngOnDestroy(): void {
    if (this.rafId !== undefined) {
      cancelAnimationFrame(this.rafId);
    }
    this.lenis?.destroy();
    this.lenis = null;
  }

  private handleFrame = (time: number) => {
    this.lenis?.raf(time);
    this.rafId = requestAnimationFrame(this.handleFrame);
  };
}
