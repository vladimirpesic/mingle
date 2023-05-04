namespace API.Extensions;

// Extension class needs to be "static" because we don't want to create another instance of already existing class
public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddCors();        
        // AddScoped() method keeps the service alive until http request is completed. Exactly what's needed for creating a JWT token
        // AddSingleton() keeps the service alive through the lifespan of an app, which is not appropriate for this task
        // AddTransient() keeps the service alive only up until the method execution is finished, which is not ideal for http requests
        services.AddScoped<ITokenService, TokenService>();
        services.AddScoped<IPhotoService, PhotoService>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<LogUserActivity>();
        services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        services.AddSignalR();
        services.AddSingleton<PresenceTracker>();
        services.Configure<CloudinarySettings>(config.GetSection("CloudinarySettings"));

        return services;
    }
}
