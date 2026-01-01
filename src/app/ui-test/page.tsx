import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Navbar } from "@/components/layout/Navbar";

export default function UITestPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-display">
            <Navbar />
            <div className="container mx-auto py-12 px-6 flex flex-col gap-12">
                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Buttons</h2>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button variant="default">Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                    </div>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button size="sm">Small</Button>
                        <Button size="default">Default</Button>
                        <Button size="lg">Large</Button>
                        <Button size="icon"><span className="material-symbols-outlined">add</span></Button>
                    </div>
                </section>

                <section className="flex flex-col gap-4 max-w-sm">
                    <h2 className="text-2xl font-bold">Input</h2>
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Select</h2>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Dialog</h2>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Open Dialog</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <span className="text-right text-sm font-medium">Name</span>
                                    <Input
                                        id="name"
                                        defaultValue="Pedro Duarte"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <span className="text-right text-sm font-medium">Username</span>
                                    <Input
                                        id="username"
                                        defaultValue="@peduarte"
                                        className="col-span-3"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </section>
            </div>
        </div>
    );
}
