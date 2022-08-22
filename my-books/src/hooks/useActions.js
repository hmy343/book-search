import { useContext } from 'react';
import AppStateContext from '../contexts/AppStateConText';

// 상태를 받아서 보내주는 역할을 하는 useBooks Hook
export default function useActions() {
  const { addToOrder } = useContext(AppStateContext);
  return { addToOrder };
}