import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

/***********************Prefixo de endereço da interface*********************/
export const beforeUrl = '';

// Animação de salto de página
export const pageAnimation = trigger('pageAnimation', [
  state('in', style({opacity: 1, transform: 'translateY(0)'})),
  transition('void => *', [
    style({
      opacity: 1,
      transform: 'translateY(40px)'
    }),
    animate('400ms  ease-out')
  ]),
  transition('* => void', [
    animate('400ms  ease-out', style({
      opacity: 0,
      transform: 'translateY(40px)'
    }))
  ])
]);
//rotateY 90 Animação de grau
export const tagAnimation = trigger('tagAnimation', [
  state('inactive', style({transform: 'rotateY(0deg)'})),
  state('active', style({transform: 'rotateY(90deg)'})),
  transition('active => inactive', animate('300ms ease-out'))
]);
//right25 Animação de grau
export const right25Animation = trigger('right25Animation', [
  state('inactive', style({transform: 'translateX(0)'})),
  state('active', style({transform: 'translateX(-25px)'})),
  transition('inactive <=> active', animate('400ms ease-out'))
]);
//left25 Animação de grau
export const left25Animation = trigger('left25Animation', [
  state('inactive', style({transform: 'translateX(0)'})),
  transition('void => *', [
    style({
      transform: 'translateX(25px)'
    }),
    animate('500ms 200ms ease-out')
  ]),
  transition('* => void', [
    animate('500ms  200ms ease-out', style({
      transform: 'translateX(25px)'
    }))
  ])
]);

// Pesquisa
export const China = {
  firstDayOfWeek: 0,
  dayNames: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'],
  dayNamesShort: ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete'],
  dayNamesMin: ['1', '2', '3', '4', '5', '6', '7'],
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
};
