import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
export declare class CoffeesController {
    private readonly coffeeService;
    constructor(coffeeService: CoffeesService);
    findAll(paginationQuery: any): import("./entities/coffee.entity").Coffee[];
    findOne(id: number): import("./entities/coffee.entity").Coffee;
    create(createCoffeeDto: CreateCoffeeDto): any;
    update(id: string, UpdateCoffeeDto: UpdateCoffeeDto): void;
    Remove(id: string): void;
}
