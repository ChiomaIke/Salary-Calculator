
function calculateSalary(level){
	var  salary = GetSalary(level);
	return salary;
}

var GetSalary = function (level){
    var baseSalary = 20000;
    if(level ==='interns'){
        return baseSalary+(basesalary*1);
    }
    else if (level === 'associate'){
        return baseSalary+(basesalary*1.5);
    }
   else if (level === 'managers'){
        return baseSalary+(basesalary*2.5);
    }
    else if (level === 'C-executives'){
        return baseSalary+(basesalary*2.5);
    }
    else(level === 'directors'){
      return baseSalary+(basesalary*3);
    }
}

calculateSalary("Fisayomi");

