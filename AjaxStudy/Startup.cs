using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AjaxStudy.Startup))]
namespace AjaxStudy
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
