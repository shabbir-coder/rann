declare module 'waypoints/lib/noframework.waypoints' {
    export default class Waypoint {
      constructor(options: {
        element: HTMLElement;
        handler: (direction: 'up' | 'down') => void;
        offset?: string | number;
      });
    }
  }
  