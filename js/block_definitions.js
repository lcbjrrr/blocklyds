/*LINEAR REGRESSION*/
Blockly.Blocks['linear_regression_model'] = {
  init: function() {
    this.appendValueInput("labels")
        .setCheck("Array")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("(LR Model)")
        .appendField("Labels: ");
    this.appendValueInput("features")
        .setCheck("Array")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Features: ");
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("Linear Regression Model");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['linear_regression_predictors'] = {
  init: function() {
    this.appendValueInput("coeficients")
        .setCheck("Array")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("(LR Predictors)")
        .appendField("Coeficients:");
    this.appendValueInput("features")
        .setCheck("Array")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Features:");
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("Linear Regression Predictors");
 this.setHelpUrl("");
  }
};

/*LOGISTIC REGRESSION*/
Blockly.Blocks['logistic_regression_model'] = {
  init: function() {
    this.appendValueInput("labels")
        .setCheck("Array")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField("(LogReg Model)")
        .appendField("Labels:");
    this.appendValueInput("features")
        .setCheck("Array")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Features:");
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("Logistic Regression Model");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['logistic_regression_predictors'] = {
  init: function() {
    this.appendValueInput("coeficients")
        .setCheck("Array")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField("(LogReg Predictor)")
        .appendField("Coeficients:");
    this.appendValueInput("features")
        .setCheck("Array")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Features:");
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("Logistic Regression Predictors");
 this.setHelpUrl("");
  }
};