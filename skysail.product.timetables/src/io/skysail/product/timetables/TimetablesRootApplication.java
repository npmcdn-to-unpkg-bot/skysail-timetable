package io.skysail.product.timetables;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.event.EventAdmin;

import de.twenty11.skysail.server.core.restlet.RouteBuilder;
import io.skysail.server.app.ApiVersion;
import io.skysail.server.app.ApplicationProvider;
import io.skysail.server.app.SkysailApplication;

@Component(immediate = true)
public class TimetablesRootApplication extends SkysailApplication implements ApplicationProvider {

    public TimetablesRootApplication() {
        super("timetables", new ApiVersion(1));
    }
    
    @Override
    public EventAdmin getEventAdmin() {
        return null;
    }

    @Override
    protected void attach() {
        router.setApiVersion(null);
        router.attach(new RouteBuilder("", PublicResource.class).noAuthenticationNeeded());
    }
}

