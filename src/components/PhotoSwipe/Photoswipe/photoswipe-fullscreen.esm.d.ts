export default PhotoSwipeFullscreen;
/**
 * PhotoSwipe fullscreen plugin v1.0.0
 *
 * Inspired by https://github.com/dimsemenov/PhotoSwipe/issues/1759
 *
 * By https://arnowelzel.de
 */
declare class PhotoSwipeFullscreen {
    constructor(lightbox: any);
    lightbox: any;
    initPlugin(): void;
    pswp: any;
    fullscreenAPI: {
        request: (el: any) => void;
        exit: () => any;
        isFullscreen: () => any;
        change: string | undefined;
        error: string | undefined;
    } | undefined;
    toggleFullscreen(): void;
    getFullscreenAPI(): {
        request: (el: any) => void;
        exit: () => any;
        isFullscreen: () => any;
        change: string | undefined;
        error: string | undefined;
    } | undefined;
}
