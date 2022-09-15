/******************** LINEAR REGRESSION ********************/
/*javascript*/

Blockly.JavaScript['linear_regression_model'] = function(block) {
  var value_labels = Blockly.JavaScript.valueToCode(block, 'labels', Blockly.JavaScript.ORDER_ATOMIC);
  var value_features = Blockly.JavaScript.valueToCode(block, 'features', Blockly.JavaScript.ORDER_ATOMIC);

  var functionName = Blockly.JavaScript.provideFunction_(
    'calc_linear_regression_model',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
        '(arrLabelList, arrFeaturesList) {',

        'const model = tf.sequential();',
        'model.add(tf.layers.dense({units: 1, inputShape: [1]}));',
      
        '// Prepare the model for training: Specify the loss and the optimizer.',
        'model.compile({loss: \'meanSquaredError\', optimizer: \'sgd\'});',
      
        '// Generate some synthetic data for training.',
        'const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);',
        'const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);',
      
        '// Train the model using the data then do inference on a data point the',
        '// model hasnt seen:',
        '/*await*/ model.fit(xs, ys);',
        'model.predict(tf.tensor2d([5], [1, 1])).print();',
        'return JSON.stringify({xs: xs, ys: ys});',
     '}']);
  var code = functionName + '(' + value_labels + ', ' + value_features + ')';

  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['linear_regression_predictors'] = function(block) {
  var value_coeficients = Blockly.JavaScript.valueToCode(block, 'coeficients', Blockly.JavaScript.ORDER_ATOMIC);
  var value_features = Blockly.JavaScript.valueToCode(block, 'features', Blockly.JavaScript.ORDER_ATOMIC);

  var functionName = Blockly.JavaScript.provideFunction_(
    'calc_linear_regression_predictors',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
        '(arrCoeficientList, arrFeaturesList) {',
        ' let total = 0;',
        ' for(let i = 0; i < arrCoeficientList.length; i++){',
        '  total += arrCoeficientList[i]; ',
        ' } ',
        ' return arrCoeficientList;',
     '}']);
  var code = functionName + '(' + value_coeficients + ', ' + value_features + ')';

  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/*PYTHON*/

Blockly.Python['linear_regression_model'] = function(block) {
  var value_labels = Blockly.Python.valueToCode(block, 'labels', Blockly.Python.ORDER_ATOMIC);
  var value_features = Blockly.Python.valueToCode(block, 'features', Blockly.Python.ORDER_ATOMIC);

  var functionName = Blockly.Python.provideFunction_(
    'calc_linear_regression_model',
    ['def function ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ +
        '(arrLabelList, arrFeaturesList):',
        ' iLen = len(arrFeaturesList)', 
        ' for i in range(iLen):',
        '  arrFeaturesList[i] *= 2',
        ' return arrFeaturesList'
     ]);
  var code = functionName + '(' + value_labels + ', ' + value_features + ')';

  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['linear_regression_predictors'] = function(block) {
  var value_coeficients = Blockly.Python.valueToCode(block, 'coeficients', Blockly.Python.ORDER_ATOMIC);
  var value_features = Blockly.Python.valueToCode(block, 'features', Blockly.Python.ORDER_ATOMIC);

  var functionName = Blockly.Python.provideFunction_(
    'calc_linear_regression_predictors',
    ['def function ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ +
        '(arrCoeficientList, arrFeaturesList):',
        ' total = 0;',
        ' iLen = len(arrCoeficientList)',
        ' for i = in range(iLen):',
        '  total += arrCoeficientList[i]',
        ' return arrCoeficientList',
     ]);
  var code = functionName + '(' + value_coeficients + ', ' + value_features + ')';  

  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

/******************** LOGISTIC REGRESSION ********************/

/*javascript*/

Blockly.JavaScript['logistic_regression_model'] = function(block) {
  var value_labels = Blockly.JavaScript.valueToCode(block, 'labels', Blockly.JavaScript.ORDER_ATOMIC);
  var value_features = Blockly.JavaScript.valueToCode(block, 'features', Blockly.JavaScript.ORDER_ATOMIC);

  var functionName = Blockly.JavaScript.provideFunction_(
    'calc_logistic_regression_model',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
        '(arrLabelList, arrFeaturesList) {',
        ' for(let i = 0; i < arrFeaturesList.length; i++){',
        '  arrFeaturesList[i] *= 2; ',
        ' } ',
        ' return arrFeaturesList;',
     '}']);
  var code = functionName + '(' + value_labels + ', ' + value_features + ')';  

  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['logistic_regression_predictors'] = function(block) {
  var value_coeficients = Blockly.JavaScript.valueToCode(block, 'coeficients', Blockly.JavaScript.ORDER_ATOMIC);
  var value_features = Blockly.JavaScript.valueToCode(block, 'features', Blockly.JavaScript.ORDER_ATOMIC);

  var functionName = Blockly.JavaScript.provideFunction_(
    'calc_logistic_regression_predictors',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
        '(arrCoeficientList, arrFeaturesList) {',
        ' let total = 0;',
        ' for(let i = 0; i < arrCoeficientList.length; i++){',
        '  total += arrCoeficientList[i]; ',
        ' } ',
        ' return arrCoeficientList;',
     '}']);
  var code = functionName + '(' + value_coeficients + ', ' + value_features + ')';

  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/*PYTHON*/

Blockly.Python['logistic_regression_model'] = function(block) {
  var value_labels = Blockly.Python.valueToCode(block, 'labels', Blockly.Python.ORDER_ATOMIC);
  var value_features = Blockly.Python.valueToCode(block, 'features', Blockly.Python.ORDER_ATOMIC);

  var functionName = Blockly.Python.provideFunction_(
    'calc_logistic_regression_model',
    ['def function ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ +
        '(arrLabelList, arrFeaturesList):',
        ' iLen = len(arrFeaturesList)', 
        ' for i in range(iLen):',
        '  arrFeaturesList[i] *= 2',
        ' return arrFeaturesList'
     ]);
  var code = functionName + '(' + value_labels + ', ' + value_features + ')';

  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['logistic_regression_predictors'] = function(block) {
  var value_coeficients = Blockly.Python.valueToCode(block, 'coeficients', Blockly.Python.ORDER_ATOMIC);
  var value_features = Blockly.Python.valueToCode(block, 'features', Blockly.Python.ORDER_ATOMIC);
  
  var functionName = Blockly.Python.provideFunction_(
    'calc_logistic_regression_predictors',
    ['def function ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ +
        '(arrCoeficientList, arrFeaturesList):',
        ' total = 0;',
        ' iLen = len(arrCoeficientList)',
        ' for i = in range(iLen):',
        '  total += arrCoeficientList[i]',
        ' return arrCoeficientList',
     ]);
  var code = functionName + '(' + value_coeficients + ', ' + value_features + ')';  

  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};