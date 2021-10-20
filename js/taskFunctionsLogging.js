'use strict';
{
  const logger = new Logger('green');
  const labelStyleBasis = 'color:green;font-size:16px;';
  const taskLabelStyle = labelStyleBasis + 'margin-top:15px;';
  const labelStyle = 'color:green;';

  logger.title('CUSTOM ARRAY FUNCTIONS');

  logger.title('Task 1 hasElem FUNCTION');
  const t1Array = ['some', 'array', 'of', 'many', 'values'];
  logger.log('input array:', t1Array);
  const t1String1 = 'some';
  const t1String2 = 'fake';
  logger.log(
    `Is input array has element '${t1String1}'? answer:`,
    hasElem(t1Array, t1String1)
  );
  logger.log(
    `Is input array has element '${t1String2}'? answer:`,
    hasElem(t1Array, t1String2)
  );

  logger.title('Task 2 ARRAY OF NUMBERS');
  const t2Array = [1, 499, 333, 546, 243, 34];
  logger.log('input array:', t2Array);
  const t1Number1 = 333;
  const t1Number2 = 444;
  logger.log(
    `Is input array has number ${t1Number1}? answer:`,
    hasElem(t2Array, t1Number1)
  );
  logger.log(
    `Is input array has number ${t1Number2}? answer:`,
    hasElem(t2Array, t1Number2)
  );

  logger.title('Task 3 TWINS');
  const t3Array = [24, 56, 28, 28, 38, 34, 90, 34, 28];
  logger.log('input array:', t3Array);
  logger.log(`Is input array has twins? answer:`, hasTwins(t3Array));

  logger.title('Task 4 RANDOM ARRAY');
  logger.log('generated array:', randomArray(10, 15, 78));
  logger.log('generated array:', randomArray(5, 30, 40));

  logger.title('Task 5 MIN AND MAX VALUES');
  const t5Array = [4, -2, 5, 19, -130, 0, 10];
  logger.log('input array:', t5Array);
  logger.log('min value:', minValue(t5Array));
  logger.log('max value:', maxValue(t5Array));

  logger.title('Task 6 AVERAGE VALUE');
  const t6Array = [12, 15, 20, 25, 59, 79];
  logger.log('input array:', t6Array);
  logger.log('average value:', averageValue(t6Array));
}
