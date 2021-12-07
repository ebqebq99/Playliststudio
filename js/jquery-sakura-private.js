 // domReady
 $(document).ready(function () {
  $('body').sakura({
    className: 'sakura',
    maxSize: 16, minSize: 16,
    blowAnimations: ["blow-soft-left", "blow-medium-left", "blow-hard-left", "blow-soft-right", "blow-medium-right", "blow-hard-right"],
    swayAnimations: ["sway-0", "sway-1", "sway-2", "sway-3", "sway-4", "sway-5", "sway-6", "sway-7", "sway-8"],
    fallSpeed: 1, newOn: 3000, 
  });
});