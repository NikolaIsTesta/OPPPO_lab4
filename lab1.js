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
        try {
            switch(task[i].command) {
                case "ADD":
                    if (task[i].parameters.length == 5){
                        add(task[i].parameters);
                    }
                    else{
                        console.log("Номер строки с ошибкой:", i+1)
                        throw new Error("Введено неверное количество параметров");
                    }
                    break;
                case "REM":
                    try {
                        rem(task[i].parameters);
                    } catch(e){
                        console.log("Номер строки с ошибкой:", i+1, "\nСообщение об ошибке: ", e)
                        throw new Error("Ошибка в в условии удаления");
                    }
                    break;
                case "PRINT":
                    list.output();
                    break;
                default:
                    console.log("Номер строки с ошибкой:", i+1)
                    throw new Error("Встречена неизвестная команда");
            }
        }
        catch(e) {

        }
    }
}

function add(objectData) {
    switch(objectData[0]) {
        case "Мышки":
            const mouse = new Mouse(objectData[1], objectData[2], objectData[3], objectData[4]);
            list.append(mouse);
            break;
        case "Клавиатуры":
            const keyboard = new Keyboard(objectData[1], objectData[2], objectData[3], objectData[4]);
            list.append(keyboard);
            break;
        case "Мониторы":
            const monitors = new Monitors(objectData[1], objectData[2], objectData[3], objectData[4]);
            list.append(monitors);
            break;
        default:
            throw new Error("Встречен неизвестный объект");
    }
  }

function rem(condition) {
        list.remove(condition)
  }
  