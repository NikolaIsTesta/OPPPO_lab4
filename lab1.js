import { loadFile } from './display-input.js'
import { getTask } from './file-input.js'
import { CircularLinkedList } from './circle-list.js'
import { Mouse, Monitors, Keyboard } from './office-equipment.js'


const list = new CircularLinkedList();

document.getElementById("button").addEventListener("click", clickHandler)
async function  clickHandler() {
    loadFile()
    let task = await getTask()
    for (let i = 0; i < task.length; i++) {
            switch(task[i].command) {
                case "ADD":
                    add(...task[i].parameters);
                    break;
                case "REM":
                    rem(...task[i].parameters);
                    break;
                case "PRINT":
                    list.output();
                    break;
                default:
                    console.log("Номер строки с ошибкой:", i+1)
                    throw new Error("Встречена неизвестная команда");
            }
        }
}

function add(ObjectClass, ...parameters) {
    switch(ObjectClass) {
        case "Мышки":
            const mouse = new Mouse(...parameters);
            list.append(mouse);
            break;
        case "Клавиатуры":
            const keyboard = new Keyboard(...parameters);
            list.append(keyboard);
            break;
        case "Мониторы":
            const monitors = new Monitors(...parameters);
            list.append(monitors);
            break;
        default:
            throw new Error("Встречен неизвестный объект");
    }
  }

function rem(condition) {
        list.remove(condition)
  }
  