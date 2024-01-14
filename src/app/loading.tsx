import SkeletonCard from '@/components/SkeletonCard';

export default function loading() {
    return (
        <main>
            <div className="grid grid-cols-3 gap-8">
                {Array(8).fill(1).map(i => (
                    <SkeletonCard key={i}/>
                ))}
            </div>
        </main>
    )
}