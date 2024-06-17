import { onMounted, onUnmounted } from 'vue';

export function useOutsideClick(ref, onClick) {
  const handleClickOutside = (event) => {
    if (!ref.value.contains(event.target)) {
      onClick();
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });
}


