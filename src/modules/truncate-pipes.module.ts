import { WordsPipe } from './../pipes/words.pipe';
import { SplitcharactersPipe } from './../pipes/splitcharacters.pipe';
import { CharactersPipe } from './../pipes/characters.pipe';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
    declarations: [
        CharactersPipe,
        SplitcharactersPipe,
        WordsPipe
        // Pipes.
        // Directives.
    ],
    exports: [
        CharactersPipe,
        SplitcharactersPipe,
        WordsPipe
        // Pipes.
        // Directives.
    ]
})
export class TruncatePipesModule {

    /**
     * Use in AppModule
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: TruncatePipesModule,
            providers: []
        };
    }

    /**
     * Use in features modules with lazy loading
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: TruncatePipesModule,
            providers: []
        };
    }

}
