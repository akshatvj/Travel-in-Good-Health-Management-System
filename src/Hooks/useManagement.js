import { useState } from 'react';
import {Management} from "../Logic/Management";

export default function useManagement(){
    const [management, setManagement] = useState(Management.getInstance());
    return{
        setManagement,
        management
    }
}