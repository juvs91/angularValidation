function testValidator (assert) {
	var validator = userValidatorFactory();
	assert.equal(validator.validateIsOnlyLetters("juventino"),true,"test with just strings");
	assert.equal(validator.validateIsOnlyLetters("1juventino"),false,"test starting with a number");
	assert.equal(validator.validateIsOnlyLetters("juventino1"),false,"test with a number at the end");
	assert.equal(validator.validateIsOnlyLetters("juve3452345ntino"),false,"test with nombers in the middle of the letters"); 
	assert.equal(validator.validateIsOnlyLetters("12333123"),false,"just numbers");  
	assert.equal(validator.validateIsOnlyLetters("<$%juventino"),false,"test starting with symbols");
	assert.equal(validator.validateIsOnlyLetters("juventino<<x$%"),false,"test ending with symbols");
	assert.equal(validator.validateIsOnlyLetters("juven>>>%&tino"),false,"test with symbols in the midle of the letters");
	assert.equal(validator.validatePassword("juven"),false,"just letters with lenght of 5 ");
	assert.equal(validator.validatePassword("123!/"),false,"numbers then symbols with lenght of 5");      
	assert.equal(validator.validatePassword("1fs!/"),false,"numbers then letters then symbols with length of 5");      
	assert.equal(validator.validatePassword("juvent"),true,"just letters with lenght of 6");  
	assert.equal(validator.validatePassword("1juvent"),true,"starting with numbers then letters with lenght bigger than 6"); 
	assert.equal(validator.validatePassword("juvent1"),true,"starting with letters and ending with numbers with lenght bigger than 6");   
	assert.equal(validator.validatePassword("juv22ent"),true,"numbers in the middle of letters with lenght bigger than 6"); 
	assert.equal(validator.validatePassword("juvent>·&/"),true,"letters then symbols with lenght bigger than 6");
	assert.equal(validator.validatePassword("<·$%juvent"),true,"symbols then letters with lenght bigger than 6");
	assert.equal(validator.validatePassword("juve>·&/nt"),true,"symbols in the middle of letterswith lenght bigger than 6");
}

QUnit.test("validate form",testValidator);