import { DumbbellIcon, AppleIcon, CalendarIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import CornerElements from "./CornerElements";

const starterPlan = {
    name: "Starter Plan",
    workoutPlan: {
        schedule: ["Monday", "Wednesday", "Friday"],
        exercises: [
            {
                day: "Monday",
                routines: [
                    { name: "Push-Ups", sets: 3, reps: 15, description: "Bodyweight exercise for chest and triceps" },
                    { name: "Squats", sets: 3, reps: 20, description: "Bodyweight lower body workout" },
                ],
            },
            {
                day: "Wednesday",
                routines: [
                    { name: "Plank", sets: 3, reps: 60, description: "Hold for 60 seconds" },
                    { name: "Jumping Jacks", sets: 3, reps: 30 },
                ],
            },
            {
                day: "Friday",
                routines: [
                    { name: "Lunges", sets: 3, reps: 12 },
                    { name: "Burpees", sets: 3, reps: 10 },
                ],
            },
        ],
    },
    dietPlan: {
        dailyCalories: 2200,
        meals: [
            { name: "Breakfast", foods: ["Oatmeal with banana", "Boiled eggs"] },
            { name: "Lunch", foods: ["Grilled chicken", "Brown rice", "Steamed broccoli"] },
            { name: "Dinner", foods: ["Salmon", "Sweet potato", "Green beans"] },
            { name: "Snacks", foods: ["Greek yogurt", "Almonds"] },
        ],
    },
};

const NoFitnessPlan = () => {
    const plan = starterPlan;

    return (
        <div className="relative backdrop-blur-sm border border-border rounded-lg p-6">
            <CornerElements />

            <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <h3 className="text-lg font-bold">
                    PLAN: <span className="text-primary">{plan.name}</span>
                </h3>
            </div>

            <Tabs defaultValue="workout" className="w-full">
                <TabsList className="mb-6 w-full grid grid-cols-2 bg-cyber-terminal-bg border">
                    <TabsTrigger
                        value="workout"
                        className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                    >
                        <DumbbellIcon className="mr-2 size-4" />
                        Workout Plan
                    </TabsTrigger>

                    <TabsTrigger
                        value="diet"
                        className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                    >
                        <AppleIcon className="mr-2 h-4 w-4" />
                        Diet Plan
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="workout">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <CalendarIcon className="h-4 w-4 text-primary" />
                            <span className="font-mono text-sm text-muted-foreground">
                                SCHEDULE: {plan.workoutPlan.schedule.join(", ")}
                            </span>
                        </div>

                        <Accordion type="multiple" className="space-y-4">
                            {plan.workoutPlan.exercises.map((exerciseDay, index) => (
                                <AccordionItem
                                    key={index}
                                    value={exerciseDay.day}
                                    className="border rounded-lg overflow-hidden"
                                >
                                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-primary/10 font-mono">
                                        <div className="flex justify-between w-full items-center">
                                            <span className="text-primary">{exerciseDay.day}</span>
                                            <div className="text-xs text-muted-foreground">
                                                {exerciseDay.routines.length} EXERCISES
                                            </div>
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent className="pb-4 px-4">
                                        <div className="space-y-3 mt-2">
                                            {exerciseDay.routines.map((routine, routineIndex) => (
                                                <div
                                                    key={routineIndex}
                                                    className="border border-border rounded p-3 bg-background/50"
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h4 className="font-semibold text-foreground">
                                                            {routine.name}
                                                        </h4>
                                                        <div className="flex items-center gap-2">
                                                            <div className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-mono">
                                                                {routine.sets} SETS
                                                            </div>
                                                            <div className="px-2 py-1 rounded bg-secondary/20 text-secondary text-xs font-mono">
                                                                {routine.reps} REPS
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {routine.description && (
                                                        <p className="text-sm text-muted-foreground mt-1">
                                                            {routine.description}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </TabsContent>

                <TabsContent value="diet">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-mono text-sm text-muted-foreground">
                                DAILY CALORIE TARGET
                            </span>
                            <div className="font-mono text-xl text-primary">
                                {plan.dietPlan.dailyCalories} KCAL
                            </div>
                        </div>

                        <div className="h-px w-full bg-border my-4" />

                        <div className="space-y-4">
                            {plan.dietPlan.meals.map((meal, index) => (
                                <div
                                    key={index}
                                    className="border border-border rounded-lg overflow-hidden p-4"
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <h4 className="font-mono text-primary">{meal.name}</h4>
                                    </div>
                                    <ul className="space-y-2">
                                        {meal.foods.map((food, foodIndex) => (
                                            <li
                                                key={foodIndex}
                                                className="flex items-center gap-2 text-sm text-muted-foreground"
                                            >
                                                <span className="text-xs text-primary font-mono">
                                                    {String(foodIndex + 1).padStart(2, "0")}
                                                </span>
                                                {food}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default NoFitnessPlan;
