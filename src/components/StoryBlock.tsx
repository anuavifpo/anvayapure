interface StoryBlockProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  description: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

const StoryBlock = ({
  image,
  imageAlt,
  title,
  subtitle,
  description,
  reverse = false,
  children
}: StoryBlockProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
      reverse ? 'md:[direction:rtl]' : ''
    }`}>
      {/* Image */}
      <div className="image-container aspect-[4/3] rounded-lg overflow-hidden md:[direction:ltr]">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="md:[direction:ltr]">
        {subtitle && (
          <p className="text-caption uppercase text-primary mb-2">{subtitle}</p>
        )}
        <h3 className="font-serif text-heading text-foreground mb-4">{title}</h3>
        <p className="prose-brand text-body-lg mb-6">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default StoryBlock;
