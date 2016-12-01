
function calculateSalary(level){
	var  salary = GetSalary(level);
	return salary;
}

var GetSalary = function (level){
    var baseSalary = 20000;
    if(level ==='interns'){
        return baseSalary;
    }
    else if (level === 'associate'){
        return baseSalary+(baseSalary*1);
    }
   else if (level === 'managers'){
        return baseSalary+(baseSalary*1.5);
    }
    else if (level === 'C-executives'){
        return baseSalary+(baseSalary*2.5);
    }
    else if(level === 'directors'){
      return baseSalary+(baseSalary*3);
    }
}



