/*
Created by: Gustavo Zanatta Bulhões
Version: 1.0
E-mail: gustavozbulhoes@gmail.com
*/

import { LightningElement } from 'lwc';
import * as RESUME_DATA from './resumeContainerData'

export default class ResumeContainer extends LightningElement {
    RESUME_DATA = RESUME_DATA

    connectedCallback(){
        console.log("Author:","Gustavo Zanatta Bulhões")
    }
}