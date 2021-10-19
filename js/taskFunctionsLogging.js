'use strict';
{
  const labelStyleBasis = 'color:green;font-size:16px;';
  const taskLabelStyle = labelStyleBasis + 'margin-top:15px;';
  const labelStyle = 'color:green;';

  console.log('%c%s', taskLabelStyle, 'CUSTOM ARRAY FUNCTIONS');

  console.log('%c%s', taskLabelStyle, 'Task 1 hasElem FUNCTION');
  const t1Array = ['some', 'array', 'of', 'many', 'values'];
  console.log('%c%s', labelStyle, 'input array:', t1Array);
  const t1String1 = 'some';
  const t1String2 = 'fake';
  console.log(
    '%c%s',
    labelStyle,
    `Is input array has element '${t1String1}'? answer:`,
    hasElem(t1Array, t1String1)
  );
  console.log(
    '%c%s',
    labelStyle,
    `Is input array has element '${t1String2}'? answer:`,
    hasElem(t1Array, t1String2)
  );

  console.log('%c%s', taskLabelStyle, 'Task 2 ARRAY OF NUMBERS');
  const t2Array = [1, 499, 333, 546, 243, 34];
  console.log('%c%s', labelStyle, 'input array:', t2Array);
  const t1Number1 = 333;
  const t1Number2 = 444;
  console.log(
    '%c%s',
    labelStyle,
    `Is input array has number ${t1Number1}? answer:`,
    hasElem(t2Array, t1Number1)
  );
  console.log(
    '%c%s',
    labelStyle,
    `Is input array has number ${t1Number2}? answer:`,
    hasElem(t2Array, t1Number2)
  );

  console.log('%c%s', taskLabelStyle, 'Task 3 TWINS');
  const t3Array = [24, 56, 28, 28, 38, 34, 90, 34, 28];
  console.log('%c%s', labelStyle, 'input array:', t3Array);
  console.log(
    '%c%s',
    labelStyle,
    `Is input array has twins? answer:`,
    hasTwins(t3Array)
  );

  console.log('%c%s', taskLabelStyle, 'Task 4 RANDOM ARRAY');
  console.log(
    '%c%s',
    labelStyle,
    'generated array:',
    randomArray(10, 15, 78)
  );
  console.log(
    '%c%s',
    labelStyle,
    'generated array:',
    randomArray(5, 30, 40)
  );

  console.log('%c%s', taskLabelStyle, 'Task 5 MIN AND MAX VALUES');
  const t5Array = [4, -2, 5, 19, -130, 0, 10];
  console.log('%c%s', labelStyle, 'input array:', t5Array);
  console.log('%c%s', labelStyle, 'min value:', minValue(t5Array));
  console.log('%c%s', labelStyle, 'max value:', maxValue(t5Array));

  console.log('%c%s', taskLabelStyle, 'Task 6 AVERAGE VALUE');
  const t6Array = [12, 15, 20, 25, 59, 79];
  console.log('%c%s', labelStyle, 'input array:', t6Array);
  console.log(
    '%c%s',
    labelStyle,
    'average value:',
    averageValue(t6Array)
  );
}
