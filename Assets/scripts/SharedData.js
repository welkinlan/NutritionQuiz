#pragma strict

static var healthyFood : String[] = 
	['Pear', 'Carrot', 'Chicken', 'Cheese', 'Bread', 'Water', 
	 'Milk', 'Soup', 'Salad', 'Raisins', 'Strawberries', 'Juice'];
static var unhealthyFood : String[] = 
	['Apple pie', 'French fries', 'Sausage', 'Ice cream', 'Donut', 'Soda',  
	 'Cupcake', 'Hot dog', 'Hamburger', 'Chocolate bar', 'Cookie', 'Cake'];	
static var score : int = 0;

static var ioWriter : StreamWriter;

static function writeLog(opt: String, val: String){
	var t: System.DateTime = System.DateTime.Now;
    var time : String = String.Format("{0:D2}:{1:D2}:{2:D2}:{3:D3}", t.Hour, t.Minute, t.Second, t.Millisecond);
	this.ioWriter.WriteLine(opt + "     " + val + "     " + time);
    this.ioWriter.Flush();
}

