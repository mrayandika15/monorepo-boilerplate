import { Button } from '@repo/ui/components';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-50">
            <div className="flex flex-col items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">
                        Typescript Boilerplate Panel
                    </h1>
                    <p className="text-lg">
                        Typescript Boilerplate is a starter template for
                        building modern web applications with Typescript and
                        React.
                    </p>
                </div>
                <div className="mt-10 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <Button isLoading>Example Button</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
