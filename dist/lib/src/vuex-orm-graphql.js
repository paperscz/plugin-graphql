var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import Context from "./common/context";
import { Destroy, Fetch, Mutate, Persist, Push } from "./actions";
import Query from "./actions/query";
import SimpleQuery from "./actions/simple-query";
import SimpleMutation from "./actions/simple-mutation";
import { isPlainObject } from "./support/utils";
/**
 * Main class of the plugin. Setups the internal context, Vuex actions and model methods
 */
var VuexORMGraphQL = /** @class */ (function () {
    /**
     * @constructor
     * @param {Components} components The Vuex-ORM Components collection
     * @param {Options} options The options passed to VuexORM.install
     */
    function VuexORMGraphQL(components, options) {
        Context.setup(components, options);
        VuexORMGraphQL.setupActions();
        VuexORMGraphQL.setupModelMethods();
    }
    /**
     * Allow everything to read the context.
     */
    VuexORMGraphQL.prototype.getContext = function () {
        return Context.getInstance();
    };
    /**
     * This method will setup following Vuex actions: fetch, persist, push, destroy, mutate
     */
    VuexORMGraphQL.setupActions = function () {
        var context = Context.getInstance();
        context.components.RootActions.simpleQuery = SimpleQuery.call.bind(SimpleQuery);
        context.components.RootActions.simpleMutation = SimpleMutation.call.bind(SimpleMutation);
        context.components.Actions.fetch = Fetch.call.bind(Fetch);
        context.components.Actions.persist = Persist.call.bind(Persist);
        context.components.Actions.push = Push.call.bind(Push);
        context.components.Actions.destroy = Destroy.call.bind(Destroy);
        context.components.Actions.mutate = Mutate.call.bind(Mutate);
        context.components.Actions.query = Query.call.bind(Query);
    };
    /**
     * This method will setup following model methods: Model.fetch, Model.mutate, Model.customQuery, record.$mutate,
     * record.$persist, record.$push, record.$destroy and record.$deleteAndDestroy, record.$customQuery
     */
    VuexORMGraphQL.setupModelMethods = function () {
        var context = Context.getInstance();
        // Register static model convenience methods
        context.components.Model.fetch = function (filter, bypassCache) {
            if (bypassCache === void 0) { bypassCache = false; }
            return __awaiter(this, void 0, void 0, function () {
                var filterObj;
                return __generator(this, function (_a) {
                    filterObj = filter;
                    if (!isPlainObject(filterObj))
                        filterObj = { id: filter };
                    return [2 /*return*/, this.dispatch("fetch", { filter: filterObj, bypassCache: bypassCache })];
                });
            });
        };
        context.components.Model.mutate = function (params) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.dispatch("mutate", params)];
                });
            });
        };
        context.components.Model.customQuery = function (_a) {
            var name = _a.name, filter = _a.filter, multiple = _a.multiple, bypassCache = _a.bypassCache;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.dispatch("query", { name: name, filter: filter, multiple: multiple, bypassCache: bypassCache })];
                });
            });
        };
        // Register model convenience methods
        var model = context.components.Model.prototype;
        model.$mutate = function (_a) {
            var name = _a.name, args = _a.args, multiple = _a.multiple;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    args = args || {};
                    if (!args["id"])
                        args["id"] = this.id;
                    return [2 /*return*/, this.$dispatch("mutate", { name: name, args: args, multiple: multiple })];
                });
            });
        };
        model.$customQuery = function (_a) {
            var name = _a.name, filter = _a.filter, multiple = _a.multiple, bypassCache = _a.bypassCache;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    filter = filter || {};
                    if (!filter["id"])
                        filter["id"] = this.id;
                    return [2 /*return*/, this.$dispatch("query", { name: name, filter: filter, multiple: multiple, bypassCache: bypassCache })];
                });
            });
        };
        model.$persist = function (args) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.$dispatch("persist", { id: this.id, args: args })];
                });
            });
        };
        model.$push = function (args) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.$dispatch("push", { data: this, args: args })];
                });
            });
        };
        model.$destroy = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.$dispatch("destroy", { id: this.id })];
                });
            });
        };
        model.$deleteAndDestroy = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.$delete()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, this.$destroy()];
                    }
                });
            });
        };
    };
    return VuexORMGraphQL;
}());
export default VuexORMGraphQL;
//# sourceMappingURL=vuex-orm-graphql.js.map