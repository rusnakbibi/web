export interface ModelForView {
  on(eventName: string, callback: () => void): void;
}