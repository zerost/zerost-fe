export default function useCounter(initial = 0) {
  const count = ref(initial)
  const inc = () => ++count.value
  return { count, inc }
}
